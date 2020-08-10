import {
  Component,
  OnInit,
  Input,
  Inject,
  Injector,
  PLATFORM_ID,
  ViewChild,
  ElementRef,
  EventEmitter,  
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { HeaderService } from './header.service';
import { SearchResponse, SearchData } from './header.model';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
const configKey = makeStateKey("CONFIG"); 
declare var webkitSpeechRecognition : any;
@Component({
  selector: 'acuSmartHeader',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})


export class HeaderComponent implements OnInit {
  @Input() customLabel: string;
   searchData : string;
   response: SearchData[];
   voiceSearchTerm: string;

@ViewChild('searchKey') hiddenSearchHandler:ElementRef;
  constructor(
    private fb: FormBuilder,
    private injector: Injector,
    private state: TransferState,
    private headerService : HeaderService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  
  if(isPlatformServer(this.platformId)) {
      const envJson = this.injector.get("CONFIG") ? this.injector.get("CONFIG") : {};
      this.state.set(configKey, envJson as any);
    }

    // var SpeechRecognition = window.SpeechRecognition ;
    // var recognition = new SpeechRecognition();


  }

  ngOnInit(): void {}

  voiceSearch() {
    var self = this;
    if('webkitSpeechRecognition' in window) {
      var recognition  = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = false;
      recognition.lang = 'en-US';
      recognition.start();
      // const voiceSearchForm = this.formSearch.nativeElement;
      const voiceHandler = this.hiddenSearchHandler.nativeElement;
      recognition.onresult = function(e) {
        voiceHandler.value = e.results[0][0].transcript;
        recognition.stop();
        self.search(voiceHandler.value);
        document.getElementById('search').click();
      };
      recognition.onerror = function(e) {
        recognition.stop();
      };
      

    } else {
      alert('your browser doesnt support speech recoginition');
    }
    // document.getElementById('search').click();
    
    }



 



    search(searchValue ? :string) {
        var searchTerm;
        if(searchValue == undefined) {
          searchTerm =  this.hiddenSearchHandler.nativeElement.value;
        } else {
          searchTerm =  searchValue ;
        }
        console.log(searchTerm);

        if(searchTerm != '') {
        this.headerService.searchBook(searchTerm) .pipe(
          filter(Boolean),
          debounceTime(150),
          distinctUntilChanged()).subscribe((res: SearchResponse) => {
          this.response = res.results;
          console.log(this.response);
          this.headerService.shareData(res);
          this.headerService.sendClickCall(true);
        }) 
      }
        else {
              this.headerService.sendClickCall(false);
        }
    }

// ngOnInit() {}
  
 }

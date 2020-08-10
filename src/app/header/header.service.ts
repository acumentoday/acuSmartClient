import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchResponse, SearchData } from './header.model';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { profileBase } from '../_helpers/variables';
@Injectable({
  providedIn: 'root'
})
export class HeaderService {


  private searchSource = new BehaviorSubject<SearchResponse>({'code' : 0, 'results': []});
  currentSearch = this.searchSource.asObservable();
  private subject = new Subject();
  constructor(private http : HttpClient) { }

  searchBook(searchItem) {
    return this.http.get<SearchResponse>(`${profileBase}/book/search?q=` + searchItem);
  }


  shareData(searchData:SearchResponse) {
    console.log(searchData);
    this.searchSource.next(searchData);
  }



  sendClickCall(message: boolean) {
    console.log(message);
    this.subject.next({ clicked: message });
}
 
getClickCall(): Observable<any> {
    return this.subject.asObservable();
}

}

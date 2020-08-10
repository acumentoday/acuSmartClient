import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private http: HttpClient, private _sanitizer: DomSanitizer) {}

  getImage(imageUrl: string): any {
    return this.http.get(imageUrl, {responseType: 'blob'}).pipe(map(blob => {
      var urlCreator = window.URL;
      return this._sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
    }))
  }
}

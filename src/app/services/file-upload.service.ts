import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }

  uploadImage(e: Event): Observable<string> {
    const {target} = e;
    const file = (target as HTMLInputElement).files.item(0);
    let formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post('/upload', formData, {responseType: 'text'});
  }

}

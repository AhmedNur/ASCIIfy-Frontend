import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {FileUploadService} from "../services/file-upload.service";

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent implements OnInit {

  ascii: string;

  fileName: string;

  fieldNotEmpty: boolean;

  constructor(private http: HttpClient, private fileUploadService: FileUploadService) { }

  ngOnInit() {
    this.fileName = 'Select Image';
  }

  autoSubmitForm(e: Event) {
    this.fileName = (e.target as HTMLInputElement).files.item(0).name;
    if((e.target as HTMLInputElement).files.item(0) != null) {
      this.fieldNotEmpty = true;
      this.fileUploadService.uploadImage(e).subscribe(data => this.ascii = data, err => console.log(err));
    } else {
      this.fieldNotEmpty = false;
    }
  }
}

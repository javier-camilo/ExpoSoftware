import { Component, OnInit } from '@angular/core';
import { UploadDownloadService } from 'src/app/services/upload-download.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-registro-pendon',
  templateUrl: './registro-pendon.component.html',
  styleUrls: ['./registro-pendon.component.css']
})
export class RegistroPendonComponent implements OnInit {
  pendonForm : FormGroup;
  progress: number = 0;
  file : File;

  constructor(private uploadServide :UploadDownloadService, private formBuilder : FormBuilder) { }


  ngOnInit(): void {
    this.buildForm();
    

  }

  private buildForm(){
    this.pendonForm = this.formBuilder.group({
      file: ['', [Validators.required]],
      fileName: ['']
    });
  }

  onSubmit() {
    console.log(this.file);
    this.uploadServide.uploadFiles([this.file]).subscribe(result => {
      if (result.type == HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * (result.loaded / result.total));
      } else if (result.type == HttpEventType.Response) {
        const fileNames = result.body;
        
        console.log(fileNames);
      }
    });
  }

  setFile(files: string | any[]) {
    if (files.length === 0) {
      return;
    }

    const fileToUpload = <File>files[0];
    this.file = fileToUpload;
  }

  download() {
    const fileName = this.pendonForm.controls['fileName'].value;

    this.uploadServide.downloadFile(fileName, 'Pendon.pptx').subscribe(event =>{
      console.log(event);
      let url = URL.createObjectURL(event);
      console.log(url);
      let link = document.createElement('a');
      link.href = url;
      
      link.target = "blank";
      link.click();
    })
  }


}

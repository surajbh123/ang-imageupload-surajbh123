import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UploadService } from '../service/upload.service';
import { HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  progress: number = 0;
  selecetdFile!: FormData;
  showProgress: boolean = false;
  constructor(private uploadService: UploadService) { }

  onFileSelected(event: any) {
    this.selecetdFile = <FormData>event.target.files[0];
  }


  submitForm(){
    const fd = new FormData();
    //@ts-ignore
    fd.append('file', this.selecetdFile, this.selecetdFile.name);
    console.log(fd.get('file'));

    this.uploadService.uploadImage(fd).subscribe(events => {
      if (events.type === HttpEventType.UploadProgress) {
        this.showProgress = true;
        //@ts-ignore
        this.progress = Math.round(events.loaded / events.total * 100);
      }
      else if (events.type === HttpEventType.Response) {
        console.log("hiii");
     setTimeout(() => {
          this.showProgress = false;
        }, 2000)
      }
    });
  }

  ngOnInit(): void {
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService  {

  constructor(private http:HttpClient) { }

  uploadImage(image:any){
   return this.http.post("http://localhost:8080/test/uploadimage",image,{
     reportProgress:true,
     observe:'events'
   });   
  }
} 

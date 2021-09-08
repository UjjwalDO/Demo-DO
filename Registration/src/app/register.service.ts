import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:4000/api';


  constructor(private http:HttpClient, private router : Router) { }

  register(data:any){
    return this.http.post(`${this.url}/user/register`,data)
  };

}

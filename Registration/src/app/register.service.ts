import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'https://localhost:44389/api';


  constructor(private http:HttpClient, private router : Router) { }

  InsertData(data:any){
    //  return this.http.post(`${this.url}/ApplicantForm`,data);
    return this.http.post(this.url + '/ApplicantForm', data);
  };

  getCity(): Observable<any[]> {
    return this.http.get<any>(this.url + '/City');
  }
  getState(): Observable<any[]> {
    return this.http.get<any>(this.url + '/State');
  }
  getCountry(): Observable<any[]> {
    return this.http.get<any>(this.url + '/Country');
  }
  getPosition(): Observable<any[]> {
    return this.http.get<any>(this.url + '/Position');
  }
  getAreaCode(): Observable<any[]> {
    return this.http.get<any>(this.url + '/AreaCode');
  }
  getAreaOfStudy(): Observable<any[]> {
    return this.http.get<any>(this.url + '/AreaOfStudy');
  }
  getCourse(): Observable<any[]> {
    return this.http.get<any>(this.url + '/Course');
  }
  getDocument(): Observable<any[]> {
    return this.http.get<any>(this.url + '/Document');
  }
  getEmpType(): Observable<any[]> {
    return this.http.get<any>(this.url + '/Emp');
  }
}

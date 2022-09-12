import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;

  private url:string = 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  getEmployee():Observable<employee[]>{
    return this.http.get<employee[]>(this.url + `/list`); 
  }

  addUser(jsonData:any){
    return this.http.post(this.url + `/add`,jsonData);
  }

  deleteUser(id:any){
    return this.http.delete(`${this.url}/delete/${id}`);
  }

  getCurrentUser(id:any){
    return this.http.get(`${this.url}/list/${id}`);
  }

  updateUser(id:any, jsonData:any)
  {
    return this.http.put(`${this.url}/update/${id}`,jsonData);
  }

}

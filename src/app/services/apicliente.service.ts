import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response} from '../models/response';
import {Cliente} from '../models/cliente';

//Para hacer las solicitudes post
const HttpOption ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiclienteService {

  url:string = 'https://localhost:44392/api/cliente'   

  constructor(
    private _http: HttpClient
  ) { }

  getClient(): Observable<Response>{
    return this._http.get<Response>(this.url);
  }

  add(cliente: Cliente):Observable<Response>{
    return this._http.post<Response>(this.url,cliente,HttpOption);
  }

  edit(cliente: Cliente):Observable<Response>{
    return this._http.put<Response>(this.url,cliente,HttpOption);
  }

  delete(id: number):Observable<Response>{
    return this._http.delete<Response>(`${this.url}/${id}`);
  }


}


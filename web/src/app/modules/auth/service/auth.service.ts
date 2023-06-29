import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first } from 'rxjs';

interface Params {
  email: string,
  password: string
  name: string
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private readonly BASE_URL = "http://localhost:3000";
  constructor(private http: HttpClient) { }
  API?: string
  login(record: Partial<Params>, endpoint: string): Observable<any> {
    this.API = this.BASE_URL + endpoint
    return this.http.post<any>(this.API, record)
  }

  create(record: Partial<Params>, endpoint: string): Observable<any> {
    this.API = this.BASE_URL + endpoint
    return this.http.post<any>(this.API, record)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../../heroes/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = 'http://localhost:3000';

  constructor( private http: HttpClient) { }

  login() {
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`);
  }

  
}

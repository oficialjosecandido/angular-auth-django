import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint: 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('http://localhost:8000/api/user', {withCredentials: true})
  }

  register(form) {
    console.log(form)
    return this.http.post('http://localhost:8000/api/register', form)
  }

  login(form) {
    return this.http.post('http://localhost:8000/api/login', form, {withCredentials: true});
  }

  logout() {
    return this.http.post(this.endpoint + 'logout', {}, {withCredentials: true})
  }
}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Emitters} from '../emitters/emitters';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    /* this.http.get('http://localhost:8000/api/user', {withCredentials: true}).subscribe(
      (res: any) => {
        this.message = `Hi ${res.first_name}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    ); */
    this.getUser();
  }

  getUser() {
    this.auth.getUser().subscribe((res: any) => {
      this.message = `Hi ${res.first_name}`;
      Emitters.authEmitter.emit(true);
    },
    err => {
      this.message = 'You are not logged in';
      Emitters.authEmitter.emit(false);
    })
  }

}

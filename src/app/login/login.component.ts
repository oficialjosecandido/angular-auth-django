import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    // clear the form fields
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  login() {
    this.authService.login(this.form.getRawValue()).subscribe(
      (res:any) => {
        this.router.navigate(['/'])
      },
      err => {
        alert('Login failed. Please try again');
      }
    )
  }
}

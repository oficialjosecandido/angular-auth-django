import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.buildRegister();
  }

  buildRegister() {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName:'',
      username: '',
      email: '',
      password: ''
    });
  }

  submit(): void {
    this.auth.register(this.form.getRawValue()).subscribe(() => this.router.navigate(['/login']));
  }
}

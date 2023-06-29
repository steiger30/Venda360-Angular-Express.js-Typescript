import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  })
  constructor(private fb: NonNullableFormBuilder, private authService: AuthService, private router: Router) { }
  error!: string
  login() {
    console.log("valor")
    if (this.form.valid) {
      this.authService.login(this.form.value, "/users/auth").subscribe(
        res => this.logado(res),
        err => this.error = err.error.error

      )
    }
  }
  logado(token: string) {
    window.localStorage.setItem('token', token);
    this.router.navigate(['/dashboard'])
  }
}

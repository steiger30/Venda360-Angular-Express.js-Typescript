import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  error!: string
  cadastrado: boolean = false
  form = this.fb.group({
    fullName: ["", [Validators.required, Validators.minLength(8)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]]
  })
  constructor(private fb: NonNullableFormBuilder, private authService: AuthService, private router: Router) { }
  cadastrar() {
    if (this.form.valid) {

      this.authService.create(this.form.value, "/users").subscribe(
        res => this.contaCadastrada(),
        err => this.error = err.error.error
      )
    }
  }
  contaCadastrada() {
    this.cadastrado = true;
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 5000);
  }
}

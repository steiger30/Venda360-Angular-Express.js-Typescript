import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]]
  })
  constructor(private fb: NonNullableFormBuilder) { }

  forgotPassword() {
    if (this.form.get('email')?.valid) {

    }
  }
}

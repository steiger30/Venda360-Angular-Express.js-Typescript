import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form = this.fb.group({
    nome: ["", [Validators.required]],
    cpf: ["", [Validators.required]],
    dataNascimento: ["", [Validators.required]],
    endereco: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    telefone: ["", [Validators.required]],
  })
  constructor(private fb: NonNullableFormBuilder, private router: Router) {


    if (this.router.isActive('/dashboard-admin/clientes/editar-cliente', false)) {
      const nav = this.router.getCurrentNavigation()
      if (nav?.extras.state) {
        this.setValueforEditing(nav?.extras.state)
        console.log(nav?.extras.state)
      } else {
        this.router.navigate(['/dashboard-admin/clientes']);
      }
    }

  }

  ngOnInit() {
  }

  setValueforEditing(value: any) {
    this.form.setValue({
      nome: value.nome,
      cpf: value.cpf,
      dataNascimento: value.dataNascimento,
      endereco: value.endereco,
      email: value.email,
      telefone: value.telefone
    })
  }
}

import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  error!: string
  cadastrado: boolean = false
  messagemSucesso!: string
  form = this.fb.group({
    id: [""],
    nome: ["", [Validators.required]],
    cpf: ["", [Validators.required]],
    endereco: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    telefone: ["", [Validators.required]],
  })
  constructor(private fb: NonNullableFormBuilder, private router: Router, private apiService: ApiService) {


    if (this.router.isActive('/dashboard/clientes/editar-cliente', false)) {
      const nav = this.router.getCurrentNavigation()
      if (nav?.extras.state) {
        this.setValueforEditing(nav?.extras.state)
        console.log(nav?.extras.state)
      } else {
        this.router.navigate(['/dashboard/clientes']);
      }
    }

  }

  ngOnInit() {
  }

  setValueforEditing(value: any) {
    this.form.setValue({
      id: value.id,
      nome: value.nome,
      cpf: value.cpf,
      endereco: value.endereco,
      email: value.email,
      telefone: value.telefone
    })
  }

  submitForm() {

    if (this.form.valid) {
      if (this.router.isActive('/dashboard/clientes/editar-cliente', false)) {
        this.apiService.put(this.form.value, "/cliente").subscribe(
          res => this.sucesso(res.message),
          err => this.error = err.error.error
        )
      } else {
        this.apiService.post(this.form.value, "/cliente").subscribe(
          res => this.sucesso(res.message),
          err => this.error = err.error.error
        )
      }
    }
  }

  sucesso(messagem: string) {
    this.cadastrado = true;
    this.messagemSucesso = messagem
    setTimeout(() => {
      this.router.navigate(['/dashboard/clientes'])
    }, 1000);
  }
}

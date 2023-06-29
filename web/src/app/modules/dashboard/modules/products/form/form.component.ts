import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  error!: string
  cadastrado: boolean = false
  messagemSucesso!: string
  form = this.fb.group({
    id: [''],
    nomeProduto: ["", [Validators.required]],
    preco: ["", [Validators.required]],
    descricao: [""]
  })
  constructor(private fb: NonNullableFormBuilder, private router: Router, private apiService: ApiService) {


    if (this.router.isActive('/dashboard/produtos/editar-produto', false)) {
      const nav = this.router.getCurrentNavigation()
      if (nav?.extras.state) {
        this.setValueforEditing(nav?.extras.state)
        console.log(nav?.extras.state)
      } else {
        this.router.navigate(['/dashboard/produtos']);
      }
    }

  }

  ngOnInit() {
  }

  submitForm() {
    if (this.form.valid) {
      if (this.router.isActive('/dashboard/produtos/editar-produto', false)) {
        this.apiService.put(this.form.value, "/produto").subscribe(
          res => this.sucesso(res.message),
          err => this.error = err.error.error
        )
      } else {
        this.apiService.post(this.form.value, "/produto").subscribe(
          res => this.sucesso(res.message),
          err => this.error = err.error.error
        )
      }
    }
  }
  setValueforEditing(value: any) {
    this.form.setValue({
      id: value.id,
      nomeProduto: value.nomeProduto,
      preco: value.preco,
      descricao: value.descricao
    })
  }

  sucesso(messagem: string) {
    this.cadastrado = true;
    this.messagemSucesso = messagem
    setTimeout(() => {
      this.router.navigate(['/dashboard/produtos'])
    }, 1000);
  }
}

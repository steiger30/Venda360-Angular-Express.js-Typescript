import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form = this.fb.group({
    nomeProduto: ["", [Validators.required]],
    preco: ["", [Validators.required]],
    descricao: [""]
  })
  constructor(private fb: NonNullableFormBuilder, private router: Router) {


    if (this.router.isActive('/dashboard-admin/produtos/editar-produto', false)) {
      const nav = this.router.getCurrentNavigation()
      if (nav?.extras.state) {
        this.setValueforEditing(nav?.extras.state)
        console.log(nav?.extras.state)
      } else {
        this.router.navigate(['/dashboard-admin/produtos']);
      }
    }

  }

  ngOnInit() {
  }

  setValueforEditing(value: any) {
    this.form.setValue({
      nomeProduto: value.nomeProduto,
      preco: value.preco,
      descricao: value.descricao
    })
  }
}

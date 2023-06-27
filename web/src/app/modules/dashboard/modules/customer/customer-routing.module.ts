import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '', component: CustomerComponent, children: [
      { path: '', component: HomeComponent, },
      { path: 'novo-cliente', component: FormComponent, },
      { path: 'editar-cliente', component: FormComponent, }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

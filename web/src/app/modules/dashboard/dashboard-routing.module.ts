import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: 'venda',
        loadChildren: () =>
          import('./modules/sales/sales.module').then((m) => m.SalesModule)
      },
      {
        path: 'produtos',
        loadChildren: () =>
          import('./modules/products/products.module').then((m) => m.ProductsModule)
      },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./modules/customer/customer.module').then((m) => m.CustomerModule)
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

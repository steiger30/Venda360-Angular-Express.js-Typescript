import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { provideEnvironmentNgxMask } from 'ngx-mask';
;
import { IConfig } from 'ngx-mask'
const maskConfig: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  declarations: [
    ProductsComponent,
    HomeComponent,
    FormComponent,

  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule,


  ], providers: [provideEnvironmentNgxMask(maskConfig), CurrencyPipe, {
    provide: LOCALE_ID,
    useValue: "pt"
  },
  ]
})
export class ProductsModule { }

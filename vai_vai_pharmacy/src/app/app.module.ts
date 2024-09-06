import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMedicineComponent } from './Views/add-medicine/add-medicine.component';
import { AddMedicineService } from './Service/AddMedicine/add-medicine.service';
import { AddStockComponent } from './Views/add-stock/add-stock.component';
import { CommonService } from './Service/CommonService/common.service';

@NgModule({
  declarations: [
    AppComponent,
    AddMedicineComponent,
    AddStockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AddMedicineService,CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

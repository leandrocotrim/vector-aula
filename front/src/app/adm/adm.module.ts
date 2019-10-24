import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatCommonModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pessoa', component: PessoaComponent }
];

@NgModule({
  declarations: [HomeComponent, PessoaComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    RouterModule.forChild(routes),    
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatCommonModule, MatInputModule
  ]
})
export class AdmModule { }

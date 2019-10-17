import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PessoaComponent } from './pessoa/pessoa.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pessoa', component: PessoaComponent }
];

@NgModule({
  declarations: [HomeComponent, PessoaComponent],
  imports: [
    RouterModule.forChild(routes),    
    FormsModule,
    ReactiveFormsModule 
  ]
})
export class AdmModule { }

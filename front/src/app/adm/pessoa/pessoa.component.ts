import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  public pessoa: Pessoa;
  constructor() {
  }

  ngOnInit() {
    this.pessoa = new Pessoa;
    this.pessoa.nome = 'Leandro Cotrim';
    this.pessoa.idade = 32;
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }

}

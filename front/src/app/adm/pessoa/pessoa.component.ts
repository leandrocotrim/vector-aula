import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  public pessoa: Pessoa;
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
      sobrenome: new FormControl('', Validators.required),
      idade: new FormControl('', [Validators.required, Validators.min(18)]),
    });
  }

  ngOnInit() {
    this.pessoa = new Pessoa;
    this.pessoa.nome = 'Leandro';
    this.pessoa.sobrenome = 'Cotrim';
    this.pessoa.idade = 32;
  }

  onSubmit(form: FormGroup) {
    console.log(form.value);
  }

}

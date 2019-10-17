import { Component } from '@angular/core';
import { Pessoa } from './adm/model/pessoa';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public pessoa: Pessoa;
  constructor() {
    this.pessoa = new Pessoa();
   }
  title = 'front';
}

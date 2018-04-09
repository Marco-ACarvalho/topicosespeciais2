import { Component, OnInit, Input } from '@angular/core';

import {Livro} from './livro.model'

@Component({
  selector: 'mt-livro',
  templateUrl: './livro.component.html'
})
export class LivroComponent implements OnInit {

  @Input() livro: Livro
  constructor() { }

  ngOnInit() {
  }

}

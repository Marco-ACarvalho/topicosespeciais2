import { Component, OnInit } from '@angular/core';

import {Livro} from './livro/livro.model'

import {LivrosService} from "./livros.service"

@Component({
  selector: 'mt-livros',
  templateUrl: './livros.component.html'
})
export class LivrosComponent implements OnInit {

  livros: Livro[]

  constructor(private livrosService: LivrosService) { }

  ngOnInit() {
    this.livrosService.livros().subscribe(livros => this.livros = livros);
  }

}

import { Component, OnInit } from '@angular/core';

import {LivrosService} from '../livros/livros.service'

import {Livro} from '../livros/livro/livro.model'

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-livro-detail',
  templateUrl: './livro-detail.component.html'
})
export class LivroDetailComponent implements OnInit {

  livro: Livro

  constructor(private restaurantsService: LivrosService,
              private route: ActivatedRoute) { }

  ngOnInit() {

      this.restaurantsService.livroById(this.route.snapshot.params['id'])
        .subscribe(livro => this.livro = livro)
  }

}

import { Component, OnInit } from '@angular/core';

import {LivrosService} from '../../livros/livros.service'

import {Observable} from 'rxjs/Observable'

import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private livrosService: LivrosService,
              private route: ActivatedRoute){ }

  ngOnInit() {
    this.reviews = this.livrosService.reviewsOfLivro(this.route.parent.snapshot.params['id']);
  }

}

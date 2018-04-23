import { Component, OnInit } from '@angular/core';
import {LivrosService} from '../../livros/livros.service'

import {Observable} from 'rxjs/Observable'

import {ActivatedRoute} from '@angular/router'

import {MenuItem} from '../menu-item/menu-item.model'

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private livrosService: LivrosService,
              private route: ActivatedRoute) { }

  ngOnInit() {
                this.menu = this.livrosService.
                menuOfLivro(this.route.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem){
    console.log(item);
  }

}

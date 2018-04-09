import { Component, OnInit } from '@angular/core';

import {Livro} from './livro/livro.model'

@Component({
  selector: 'mt-livros',
  templateUrl: './livros.component.html'
})
export class LivrosComponent implements OnInit {

  livros: Livro[] = [
  {
    id: "batalha_apocalipse",
    name: "Batalha do Apocalipse",
    autor: "Eduardo Spohr",
    editora: "Verus",
    category: "Fantasia",
    price: "R$ 29,90",
    tamanho: "586 páginas",
    rating: "4.97",
    imagePath: "assets/img/livros/batalha_apocalipse.jpg"
  },
  {
    id: "protocolo_bluehand_ali",
    name: "Protocolo Bluehand: Alienígenas",
    autor: "Eduardo Spohr, Alexandre Ottoni e Deive Pazos",
    editora: "NerdBooks",
    category: "Fantasia",
    price: "R$ 39,90",
    tamanho: "336 páginas",
    rating: "4.8",
    imagePath: "assets/img/livros/Protocolo-bluehand-capa2.jpg"
  },
  {
    id: "a_menina_que_roubava_livros",
    name: "A Menina Que Roubava Livros",
    autor: "Markus Zusak",
    editora: "Intrinseca",
    category: "Drama",
    price: "R$ 29,90",
    tamanho: "480 páginas",
    rating: "4,97",
    imagePath: "assets/img/livros/a_menina_que_roubava_livros_capa.jpg"
  },
  {
    id: "o_menino_do_pijama_listrado",
    name: "O Menino do Pijama Listrado",
    autor: "John Boyne",
    editora: "Seguinte",
    category: "Drama",
    price: "R$ 27,90",
    tamanho: "192 páginas",
    rating: "4,87",
    imagePath: "assets/img/livros/o_menino_do_pijama_listrado_capa.jpg"
  },
  {
    id: "a_arte_da_gerra",
    name: "A Arte da Guerra",
    autor: "Sun Tzu",
    editora: "Jardim dos Livros",
    category: "Estrategia",
    price: "R$ 25,90",
    tamanho: "160 páginas",
    rating: "4.57",
    imagePath: "assets/img/livros/a_arte_da_gerra_capa.jpg"
  },
  {
    id: "a_vida_por_tras_das_cameras",
    name: "A Vida Por Trás Das Câmeras",
    autor: "Felipe Neto",
    editora: "Ediouro",
    category: "Juvenil",
    price: "R$ 19,90",
    tamanho: "64 páginas",
    rating: "4.97",
    imagePath: "assets/img/livros/a_vida_por_tras_das_cameras_capa.jpg"
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}

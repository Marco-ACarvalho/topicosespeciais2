import {Injectable} from "@angular/core"

import {Observable} from "rxjs/Observable"

import {Http} from "@angular/http"

import 'rxjs/add/operator/map'

import {Livro} from "./livro/livro.model"

import {MEAT_API} from "../app.api"

@Injectable()
export class LivrosService{

  constructor(private http:Http){}

  livros(): Observable<Livro[]>{
    return this.http.get(`${MEAT_API}/livros`).map(response => response.json());
  }
}

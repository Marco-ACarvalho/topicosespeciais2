import {Injectable} from "@angular/core"
import {Observable} from "rxjs/Observable"
import {Http} from "@angular/http"
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import {ErrorHandler} from '../app.error-handler'
import {Livro} from "./livro/livro.model"
import {MEAT_API} from "../app.api"
import {MenuItem} from "../livro-detail/menu-item/menu-item.model"

@Injectable()
export class LivrosService{
  constructor(private http:Http){}

  livros(): Observable<Livro[]>{
    return this.http.get(`${MEAT_API}/livros`)
                .map(response => response.json())
                .catch(ErrorHandler.handleError);
  }

  livroById(id: string): Observable<Livro>{
    return this.http.get(`${MEAT_API}/livros/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfLivro(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/livros/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  menuOfLivro(id: string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/livros/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}

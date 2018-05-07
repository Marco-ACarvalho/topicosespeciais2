import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'
import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LivrosComponent } from './livros/livros.component';
import { LivroComponent } from './livros/livro/livro.component';
import { LivrosService } from './livros/livros.service';
import { LivroDetailComponent } from './livro-detail/livro-detail.component';
import { MenuComponent } from './livro-detail/menu/menu.component';
import { ShoppingCartComponent } from './livro-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './livro-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './livro-detail/reviews/reviews.component'
import { ShoppingCartService } from './livro-detail/shopping-cart/shopping-cart.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    LivrosComponent,
    LivroComponent,
    LivroDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    LivrosService,
    ShoppingCartService,
      {provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

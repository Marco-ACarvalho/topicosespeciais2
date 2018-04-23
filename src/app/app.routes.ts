import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {LivrosComponent} from './livros/livros.component'
import {LivroDetailComponent} from './livro-detail/livro-detail.component'
import {MenuComponent} from './livro-detail/menu/menu.component'
import {ReviewsComponent} from './livro-detail/reviews/reviews.component'
import {OrderComponent} from './order/order.component'

export const ROUTES: Routes =[

    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'order', component: OrderComponent},
    {path: 'livros', component: LivrosComponent},
    {path: 'livros/:id', component: LivroDetailComponent,
      children: [
        {path: '', redirectTo: 'menu', pathMatch:'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
      ]}
]

import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'

import {AboutComponent} from './about/about.component'

import {LivrosComponent} from './livros/livros.component'


export const ROUTES: Routes =[

    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'livros', component: LivrosComponent}
]

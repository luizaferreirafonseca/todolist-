import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainGerenciadorComponent } from './main-gerenciador/main-gerenciador.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path:'gerenciador', component:MainGerenciadorComponent},
    {path:'login', component:LoginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}

];

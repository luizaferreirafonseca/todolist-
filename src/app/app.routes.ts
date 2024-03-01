import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainGerenciadorComponent } from './main-gerenciador/main-gerenciador.component';
import { LoginComponent } from './login/login.component';
import { guardsGuard } from './Guards/guards.guard';

export const routes: Routes = [

    {path: 'home', component: HomeComponent},
    {path:'gerenciador', component:MainGerenciadorComponent, canActivate: [guardsGuard]},
    {path:'login', component:LoginComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}

];

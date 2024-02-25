import { Component } from '@angular/core';

import { Router } from 'express';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, RouterLink, NavbarComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

navbarButton = 'Sign In';
route = "/login";

}

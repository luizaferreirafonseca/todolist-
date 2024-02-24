import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { Router } from 'express';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, RouterLink, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from "./layout/layout";
import { Portfolio } from './services/portfolio';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  //protected readonly title = signal('portfolio');

  //Cargar iconos svg desde un inicio
  constructor(private portfolioService: Portfolio) {
    this.portfolioService.registerIcons();
  }
}

import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Portfolio } from '../../services/portfolio';

@Component({
  selector: 'app-header',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  //Inyeccion del servicio Portfolio
  private portfolioService = inject(Portfolio);
  //Ruta del logo de la cabecera
  rutaLogoDev = "assets/images/logoDev.svg";

  /**
   * Contrae todos los paneles de expansion del CV
   * @returns void. Contrae todos los paneles de expansion
  */
  contraerTodo(): void {
    this.portfolioService.contraerTodo();
  }
  
  /**
   * Expande todos los paneles de expansion del CV
   * @returns void. Expande todos los paneles de expansion
  */
  expandirTodo(): void {
    this.portfolioService.expandirTodo();
  }
  
  /**
   * Descarga el CV como PDF
   * @returns void. Descarga el CV como PDF
  */
  descargarComoPDF(): void {
    this.portfolioService.descargarPDF();
  }

}

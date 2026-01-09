import { Component, inject, ViewChild } from '@angular/core';
import { Expansionpanel } from "../shared/expansionpanel/expansionpanel";
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { SeccionesCV } from '../shared/entities';
import { Subscription } from 'rxjs';
import { Portfolio } from '../services/portfolio';

@Component({
  selector: 'app-home',
  imports: [Expansionpanel, MatExpansionModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  //Enumerado con las secciones del CV
  SeccionesCV = SeccionesCV;

  //Rutas de las imagenes
  rutaFoto = 'assets/images/fotoPerfil.jpeg';
  rutaLogoUbicacion = 'assets/images/logoUbicacion.jpg';
  rutaLogoTelefono = 'assets/images/logoTlf.jpg';
  rutaLogoEmail = 'assets/images/logoEmail.jpg';
  rutaLogoGitHub = 'assets/images/logoGitHub.jpg';

  //Inyeccion del servicio Portfolio
  private portfolioService = inject(Portfolio);

  //Referencias a los accordions izquierdo y derecho para expandir/contraer
  @ViewChild('accordIzq') accordIzq!: MatAccordion;
  @ViewChild('accordDer') accordDer!: MatAccordion;

  //Subscripcion al Subject del servicio Portfolio
  private subscripcion!: Subscription;

  /**
   * Se ejecuta al inicializar el componente, se encarga de suscribirse al Subject del servicio Portfolio
   * @returns void. Se suscribe al Subject para escuchar las acciones de expandir/contraer todos los paneles
  */
  ngOnInit(): void {
    this.subscripcion = this.portfolioService.accordionAction$
      .subscribe(action => {
        if (action === 'expand') {
          this.accordIzq.openAll();
          this.accordDer.openAll();
        } else {
          this.accordIzq.closeAll();
          this.accordDer.closeAll();
        }
      });
  }

  /**
   * Se ejecuta al destruir el componente, se encarga de cancelar la subscripcion al Subject del servicio Portfolio
   * @returns void. Cancela la subscripcion al Subject
  */
  ngOnDestroy() {
    this.subscripcion.unsubscribe();
  }

}

import { Component } from '@angular/core';
import { Expansionpanel } from "../shared/expansionpanel/expansionpanel";
import {MatExpansionModule} from '@angular/material/expansion';
import { SeccionesCV } from '../shared/entities';

@Component({
  selector: 'app-home',
  imports: [Expansionpanel, MatExpansionModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  SeccionesCV = SeccionesCV;
  rutaFoto = 'assets/images/fotoPerfil.jpeg';
  rutaLogoUbicacion = 'assets/images/logoUbicacion.jpg';
  rutaLogoTelefono = 'assets/images/logoTlf.jpg';
  rutaLogoEmail = 'assets/images/logoEmail.jpg';
  rutaLogoGitHub = 'assets/images/logoGitHub.jpg';

}

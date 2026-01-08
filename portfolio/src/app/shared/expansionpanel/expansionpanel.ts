import { ChangeDetectorRef, Component, Input, SimpleChanges, inject } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Portfolio } from '../../services/portfolio';
import { take } from 'rxjs';

@Component({
  selector: 'app-expansionpanel',
  imports: [MatExpansionModule],
  templateUrl: './expansionpanel.html',
  styleUrl: './expansionpanel.scss',
})
export class Expansionpanel {

  @Input() idSeccion: number = 0;
  titulo: string = "";
  texto: string = "";
  seccionCargada: boolean = false;

  private portfolioService = inject(Portfolio);
  private changeDetectorRef = inject(ChangeDetectorRef);

  constructor() { }

  ngOnInit(): void {
   this.cargarSeccion();
  }

  cargarSeccion(): void {
    this.portfolioService.getSeccionDatosPortfolio(this.idSeccion).pipe(take(1)).subscribe(seccion => {
      this.titulo = seccion?.tituloSeccion ?? "";
      this.texto = seccion?.textoSeccion ?? "";
      this.seccionCargada = true;
      this.changeDetectorRef.detectChanges();
    });
  }

}

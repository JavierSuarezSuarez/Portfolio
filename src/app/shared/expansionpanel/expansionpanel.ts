import { ChangeDetectorRef, Component, Input, SimpleChanges, inject } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { Portfolio } from '../../services/portfolio';
import { take } from 'rxjs';
import { DatosTextoSeccionComplejo } from '../entities';

@Component({
  selector: 'app-expansionpanel',
  imports: [MatExpansionModule],
  templateUrl: './expansionpanel.html',
  styleUrl: './expansionpanel.scss',
})
export class Expansionpanel {

  //ID de la seccion a cargar
  @Input() idSeccion: number = 0;
  tituloSeccion: string = "";
  textoSeccionSimple: string | null = null;
  textoSeccionComplejo: DatosTextoSeccionComplejo[] | null = null;
  seccionCargada: boolean = false;

  //Inyeccion del servicio Portfolio
  private portfolioService = inject(Portfolio);
  //Inyeccion del ChangeDetectorRef para detectar cambios
  private changeDetectorRef = inject(ChangeDetectorRef);

  constructor() { }

  /**
   * Se ejecuta al inicializar el componente, se encarga de llamar a funcion que carga la seccion correspondiente
   * @returns void. Llama a funcion para cargar seccion 
  */
  ngOnInit(): void {
   this.cargarSeccion();
  }

  /**
   * Se encarga de cargar la seccion correspondiente segun idSeccion
   * @returns void. Carga la seccion
  */
  cargarSeccion(): void {
    this.portfolioService.getSeccionDatosPortfolio(this.idSeccion).pipe(take(1)).subscribe(seccion => {
      this.tituloSeccion = seccion?.tituloSeccion ?? "";
      this.textoSeccionSimple = seccion?.textoSeccionSimple?.join('\n\n') ?? null;
      this.textoSeccionComplejo = seccion?.textoSeccionComplejo ?? null;
      this.seccionCargada = true;
      this.changeDetectorRef.detectChanges();
    });
  }

}

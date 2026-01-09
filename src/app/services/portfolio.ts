import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { AccordionAction, DatosSeccionCV } from '../shared/entities';
import { map, Observable, Subject } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import html2pdf from 'html2pdf.js';

@Injectable({
  providedIn: 'root',
})
export class Portfolio {

  /**
   * Servicio para las distintas operaciones de esta aplicacion
   * @param matIconRegistry Registro de iconos de Angular Material
   * @param sanitizer Servicio de sanitización de Angular
  */
  constructor(    
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) { }

  //Se injecta cliente HTTP
  private http = inject(HttpClient);

  //Subject para manejar las acciones del accordion
  private accordionAction = new Subject<AccordionAction>();
  accordionAction$ = this.accordionAction.asObservable();

  /**
   * Provoca la expansion de todos los paneles
   * @returns void. Expande todos los paneles
  */
  expandirTodo(): void {
    this.accordionAction.next('expand');
  }

  /**
   * Provoca el cierre de todos los paneles
   * @returns void. Cierra todos los paneles
  */
  contraerTodo() : void {
    this.accordionAction.next('collapse');
  }

  /**
   * Descarga el contenido principal como PDF usando html2pdf.js
   * @returns void. Descarga el contenido principal como PDF
  */
  descargarPDF() : void {
    const contenidoPDF = document.getElementById('contenido-pdf');

    if (!contenidoPDF) return;

    const options = {
      margin: 10,
      filename: 'CV_JavierSuarezSuarez.pdf',
      image: { type: 'jpeg' as 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' as 'landscape' }
    };

    html2pdf().from(contenidoPDF).set(options).save();
  }
  
  /**
   * Registra los iconos SVG usados en la aplicacion
   * @returns void. Registra los iconos SVG 
  */
  registerIcons() : void {
    this.matIconRegistry.addSvgIcon('collapseAll', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/collapseAll.svg'));
    this.matIconRegistry.addSvgIcon('expandAll', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/expandAll.svg'));
    this.matIconRegistry.addSvgIcon('download', this.sanitizer.bypassSecurityTrustResourceUrl('assets/images/download.svg')); 
  }
  
  /**
   * Devuelve todos los datos del portfolio desde el archivo JSON
   * @returns Observable<DatosSeccionCV[]>. Devuelve todos los datos del portfolio desde el archivo JSON
  */
  getDatosPortfolio(): Observable<DatosSeccionCV[]> {
    return this.http.get<DatosSeccionCV[]>('assets/cvData.json');
  }

  /**
   * Devuelve los datos de una seccion concreta del portfolio desde el archivo JSON
   * @returns Observable<DatosSeccionCV | null>. Devuelve los datos de una seccion concreta del portfolio desde el archivo JSON
  */
  getSeccionDatosPortfolio(idSeccion: number): Observable<DatosSeccionCV | null> {
    return this.http.get<DatosSeccionCV[]>('assets/cvData.json')
                    .pipe(map(secciones => secciones.find(s => s.idSeccion === idSeccion) ?? null));
  }
  
}

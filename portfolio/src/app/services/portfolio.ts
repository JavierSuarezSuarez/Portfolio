import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DatosSeccionCV } from '../shared/entities';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Portfolio {

  private http = inject(HttpClient);

  constructor() { }
  
  getDatosPortfolio() {
    return this.http.get<DatosSeccionCV[]>('assets/cvData.json');
  }

  getSeccionDatosPortfolio(idSeccion: number) {
    return this.http.get<DatosSeccionCV[]>('assets/cvData.json')
                    .pipe(map(secciones => secciones.find(s => s.idSeccion === idSeccion) ?? null));
  }
  
}

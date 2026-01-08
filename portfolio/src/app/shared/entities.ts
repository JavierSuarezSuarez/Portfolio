
export enum SeccionesCV {
  PerfilProfesional = 0,
  Formacion = 1,
  Experiencia = 2,
  TecnologiasConocimientos = 3,
  Aptitudes = 4,
  Idiomas = 5,
  DatosInteres = 6
}

export interface DatosSeccionCV {
  idSeccion: number;
  tituloSeccion: string;
  textoSeccion: string;
}
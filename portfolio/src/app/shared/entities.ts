
//Enum para las secciones del CV
export enum SeccionesCV {
  PerfilProfesional = 0,
  Formacion = 1,
  Experiencia = 2,
  TecnologiasConocimientos = 3,
  Aptitudes = 4,
  Idiomas = 5,
  DatosInteres = 6
}

//Interfaz para los datos de una seccion del CV
export interface DatosSeccionCV {
  idSeccion: number;
  tituloSeccion: string;
  textoSeccionSimple: string[];
  textoSeccionComplejo: DatosTextoSeccionComplejo[];
}

export interface DatosTextoSeccionComplejo {
  tituloSubSeccion: string;
  textoSubSeccion: string[];
}

//Tipo para las acciones del accordion
export type AccordionAction = 'expand' | 'collapse';
import { ReadonlyURLSearchParams } from "next/navigation";
import { ParsedUrlQuery } from "querystring";

export interface Formularios {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
  Fecha: string;
  Trabajador: string;
  Grupo: string[];
  TipoTrabajo: string;
  Ubicacion: string;
  Observacion: string;
  TrabajoRealizado: number;
};
interface UserData {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  name: string;
  roles: string[];
  updated: string;
  username: string;
  verified: boolean;
  token: string;
}
export interface Ubi {
  id: string
  longitud: number
  Descripcion: string
  latitud: number
  user: User[]
}
export type Coordinates = {
  created: string
  id: string
  longitud: number | null;
  latitud: number | null;
  Descripcion: string
};

export type lastSendsData = {
  id?: string
  name: string
  value: number 
  workType: string
  location: string
  createdAt?: string
}
export type WeekForms = {
  PorcentajeCambio: string;
  Anio:  number
  Semana:  string
  SumaDelTrabajo: number 
  TipoTrabajo:  string
  Trabajadores: string
  collectionId:  string
  collectionName: string
  id: string 
}


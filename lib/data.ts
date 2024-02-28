import db, { FILE_API, FORM_API, GETUSERS_API, LOCAL_URL, USER_API, WEEK_API, pb } from "./db";
import { Formularios, UserData, WeekForms } from "./types";
import axios from 'axios'


  export const lastSendsData= [
    { name: 'Mariana Macara', value: 100, workType: 'RD', location: 'JWD-230-DP023' },
    { name: 'Juan Pérez', value: 200, workType: 'DP', location: 'LGE-593-S023' },
    { name: 'Ana García', value: 150, workType: 'INSTALACIONES', location: 'MSE-093-DP021' },
  ];

export const workTypesData = [
    { percentaje: 25, value: 10023, workType: 'RD' },
    { percentaje: 40, value: 22, workType: 'DP' },
    { percentaje: 15, value: 23, workType: 'INSTALACIONES' },
    { percentaje: 30, value: 35, workType: 'ACTIVACIONES' },
  ];

export async function getData(): Promise<UserData[]> {
  const users = await axios.get(`${LOCAL_URL}/${GETUSERS_API}`)
  return users.data.items
}
export async function getForms(): Promise<Formularios[]> {
  const forms = await axios.get(`${LOCAL_URL}/${FORM_API}`)
  return forms.data.items
}
export async function getWeekForms(): Promise<WeekForms[]> {
const forms = await axios.get(`${LOCAL_URL}/${WEEK_API}`)
return forms.data.items
}
export async function getDataforWeekChart() {
  const records = await db.client.collection('Formularios_Semanal').getList(1, 50, {
    filter: 'TipoTrabajo = "ACTIVACIONES"'
  }) 
  return records.items
}
export async function getFiles() {
const forms = await axios.get(`${LOCAL_URL}/${FILE_API}`)
return forms.data.items
}

export const fetchForm = async (id: string) => {
  const records = await axios.get(`${LOCAL_URL}/${FORM_API}/${id}`)
  return records.data
}
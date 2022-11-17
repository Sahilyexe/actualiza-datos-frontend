import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
   item:any={}
  constructor(private http: HttpClient,
              ) {
    console.log('Se levanta el servicio')
   }

   getPersona(id:string) {
      return this.http.get(`${environment.url}Obtener/${id}`)
   }
   updatePersona(persona:any) {
      return this.http.post(`${environment.url}actualizar`,persona)
   }
}

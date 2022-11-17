import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';


@Component({
  selector: 'app-formulario-inicial',
  templateUrl: './formulario-inicial.component.html',
  styleUrls: ['./formulario-inicial.component.css']
})
export class FormularioInicialComponent  {
   desabilitado:boolean;
   identificacion:string;
   persona:Persona = new Persona();
   patron:string;

  constructor(private router:Router) {  
    this.desabilitado = true;
    this.identificacion= "";
    this.patron = '^[1-9]{1}-[0-9]{3,4}-[0-9]{3-4}$'
  }

ValidarCampo(){
  let identificacion = this.persona.id
  console.log(identificacion);
  if(identificacion =='' || identificacion == null || identificacion== undefined) {this.desabilitado= true;} 
  else {
    this.desabilitado= false}
  
}

  navegarFormulario(){
    this.ValidarCampo();
     localStorage.setItem('id',this.persona.id!);
     this.router.navigate(['actualiza-datos']);
     
  }
}

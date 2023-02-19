import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthenticationService } from 'src/app/services/AuthorizationService';
import {environment} from '../../../environments/environment';



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
   problema: boolean;

   constructor(private router:Router, private _authorizer: AuthenticationService) {  
    this.desabilitado = true;
    this.identificacion= "";
    this.patron = '^[1-9]{1}-[0-9]{3,4}-[0-9]{3-4}$'
    this.problema = false
  }
  async ngOnInit() {
    await this._authorizer.getAuthorizer().subscribe( 
      {
        error(err:HttpErrorResponse){
          
      if(err.status !=200) window.location.href = environment.urlUICognito;
      } ,
      complete() { 
        console.log('complete')
      },
      next(val){ 
         console.log('next')    
    }
        }
      )
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
  mostrarMensaje(){
    this.problema=true
  }
}

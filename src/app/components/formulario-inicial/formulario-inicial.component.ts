import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { AuthenticationService } from 'src/app/services/AuthorizationService';



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

  constructor(private router:Router, private _authorizer: AuthenticationService) {  
    this.desabilitado = true;
    this.identificacion= "";
    this.patron = '^[1-9]{1}-[0-9]{3,4}-[0-9]{3-4}$'
    // let token=location.href.split('%3D')[1]
    // console.warn(token)
    this._authorizer.getAuthorizer().subscribe( 
    {
      error(err:HttpErrorResponse){
       console.log(err)
        
        if (err.status!==200)
        {
         // alert(err.status)
                window.location.href = "https://example-v1.auth.us-east-1.amazoncognito.com/login?client_id=33bm67l7s0m47hcdk8b51nnspn&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Fcallback&errorMessage=Something%20went%20wrong.%20Please%20try%20again.";

        }
    } ,
    complete() { console.log('Finished sequence'); },
    next(val){console.log(val)}
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
}

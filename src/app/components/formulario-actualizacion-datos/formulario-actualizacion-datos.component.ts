import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/services/PersonaService';



@Component({
  selector: 'app-formulario-actualizacion-datos',
  templateUrl: './formulario-actualizacion-datos.component.html',
  styleUrls: ['./formulario-actualizacion-datos.component.css']
})
export class FormularioActualizacionDatosComponent implements OnInit {
  persona:Persona = new Persona();
  errorMessage:any []=[]
  mensajePersonaNoExiste:boolean=true;
  sexo:string []= ['Femenino','Masculino']
  estadoCivil:string [] =  ['Casado','Soltero','Viudo','Prefiero no responder']
  deshabilitarFormario:boolean =true;
  cargando: boolean=true;
  success: boolean=false;

  constructor(private _getPersonaService: PersonaService,
              private router:Router) {
    this.persona.id=localStorage.getItem('id')!
    this._getPersonaService.getPersona(this.persona.id).subscribe(
      resp=>{
            this.persona= Object.assign(this.persona,resp)
             this.cargando=false
             if (resp ==null) {
                this.mensajePersonaNoExiste=true; 
              }else {
                this.mensajePersonaNoExiste=false; 

                }
        
             },(error:any)=>{this.errorMessage = error;
               console.log ('error'+ error.message);
               this.cargando=false;

              }
           );
  }
  ngOnInit(){
    
  }
  actualizar(){
    this.cargando=true;
    console.log('lo mando')
    console.log(JSON.stringify(this.persona))
    this._getPersonaService.updatePersona(JSON.stringify(this.persona)).
                            subscribe(resp=>{
                            this.cargando=false;
                            this.success=true;
                            console.log(resp),
                            (error:any)=>{this.errorMessage = error; 
                            this.cargando=false;
                            console.log ('error'+ error.message)}
    });
  }

  validarCampos(campo:any){
    console.log('etro aqi')
    if(campo ==='' || campo ===undefined || campo===null) return this.deshabilitarFormario=true;
    else  {
       
          return this.deshabilitarFormario=false;
    }  
  }
  NavegarInicio(){
     this.router.navigate(['inicio'])
  }
}

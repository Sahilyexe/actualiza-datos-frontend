import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioInicialComponent } from './components/formulario-inicial/formulario-inicial.component';
import { FormularioActualizacionDatosComponent } from './components/formulario-actualizacion-datos/formulario-actualizacion-datos.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './shared/alert/alert.component';
import { LoadingComponent } from './shared/loading/loading.component'




@NgModule({
  declarations: [
    AppComponent,
    FormularioInicialComponent,
    FormularioActualizacionDatosComponent,
    AlertComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    HttpClientModule
        ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

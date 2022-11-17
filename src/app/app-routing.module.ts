import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioActualizacionDatosComponent } from './components/formulario-actualizacion-datos/formulario-actualizacion-datos.component'
import { FormularioInicialComponent } from './components/formulario-inicial/formulario-inicial.component';

const routes: Routes = [
  {path: 'inicio', component :FormularioInicialComponent}, 
  {path: 'actualiza-datos', component: FormularioActualizacionDatosComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

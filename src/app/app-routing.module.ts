import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

 

import { ClienteComponent } from 'src/app/Componentes/cliente/cliente.component';

import { MecanicoComponent } from './Componentes/mecanico/mecanico.component';

import { VehiculoComponent } from './Componentes/vehiculo/vehiculo.component';

 

 

const routes: Routes = [

 

  { path: 'clientes', component: ClienteComponent },

  { path: 'mecanicos', component: MecanicoComponent },

  { path: 'vehiculos', component: VehiculoComponent },

];

 

@NgModule({

  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]

})

export class AppRoutingModule { }
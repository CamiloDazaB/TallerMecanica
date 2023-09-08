import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

 

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { MenuComponent } from './Componentes/menu/menu.component';

import { ClienteComponent } from './Componentes/cliente/cliente.component';

import { MecanicoComponent } from './Componentes/mecanico/mecanico.component';

import { VehiculoComponent } from './Componentes/vehiculo/vehiculo.component';

import { MatIconModule } from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 

import { MatMenuModule } from '@angular/material/menu';

import { MatSidenavModule } from '@angular/material/sidenav';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';

import { MatListModule } from '@angular/material/list';

import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatSortModule } from '@angular/material/sort';

import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';

import { MatRadioModule } from '@angular/material/radio';

import { MatCardModule } from '@angular/material/card';

import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

//import { AvatarModule } from 'ngx-avatars';

import {MatFormFieldModule} from '@angular/material/form-field';

import { FormsModule} from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

 

import { RouterModule } from '@angular/router';

 

@NgModule({

  declarations: [

    AppComponent,

    MenuComponent,

    ClienteComponent,

    MecanicoComponent,

    VehiculoComponent,

   

   

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    MatIconModule,

    BrowserAnimationsModule,

    MatSidenavModule,

    MatMenuModule,

    LayoutModule,

    MatToolbarModule,

    MatButtonModule,

    MatListModule,

    MatTableModule,

    MatPaginatorModule,

    MatSortModule,

    MatInputModule,

    MatSelectModule,

    MatRadioModule,

    MatCardModule,

    ReactiveFormsModule,

    //AvatarModule,

    HttpClientModule,

    MatFormFieldModule,

    FormsModule,

    MatDialogModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
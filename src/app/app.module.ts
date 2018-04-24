import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { FrutaComponent } from './fruta/fruta.component';
import { EmpleadoComponent} from './empleado/empleado.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent} from './contacto/contacto.component';
<<<<<<< HEAD
import { CochesComponent} from './coches/coches.component';

import {ConversorPipe} from './pipes/conversor.pipe';
=======

>>>>>>> c673af7adbeb30c3139ece1bd6ff7307d0d75a68

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    EmpleadoComponent,
    HomeComponent,
<<<<<<< HEAD
    ContactoComponent,
    ConversorPipe,
    CochesComponent
=======
    ContactoComponent
>>>>>>> c673af7adbeb30c3139ece1bd6ff7307d0d75a68
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

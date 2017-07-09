import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdIconModule,MdCardModule,MdMenuModule} from '@angular/material';

import { routing, appRoutingProviders} from './aroutes/app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {dashboardComponent} from './pages/dashboard/dashboard.component';
import {workflowComponent} from './pages/workflow/workflow.component';
import {tableroworkflowComponent } from './pages/workflow/tableroworkflow/tableroworkflow.component';
import {poComponent} from './pages/po/po.component';
import { BuscarComponent} from './cabecera/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    dashboardComponent,
    workflowComponent,
    tableroworkflowComponent,
    poComponent,
    BuscarComponent



  ],
  imports: [
    BrowserModule,
    MdButtonModule, 
    MdCheckboxModule, 
    MdToolbarModule, 
    MdSidenavModule, 
    routing,
    MdIconModule,
    MdCardModule,
    MdMenuModule,
    BrowserAnimationsModule
  ],
  providers: [appRoutingProviders ],
  bootstrap: [AppComponent]
})
export class AppModule { }

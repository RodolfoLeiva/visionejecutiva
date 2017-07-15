import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdIconModule,MdCardModule,MdMenuModule,MdDialogModule,MdListModule,} from '@angular/material';

import { routing, appRoutingProviders} from './aroutes/app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { dashboardComponent} from './pages/dashboard/dashboard.component';
import { workflowComponent} from './pages/workflow/workflow.component';
import { tableroworkflowComponent } from './pages/workflow/tableroworkflow/tableroworkflow.component';
import { DialogOverviewwf1, DialogOverviewExampleDialog  } from './pages/workflow/tableroworkflow/DialogOverviewwf1.component';
import { poComponent} from './pages/po/po.component';
import { BuscarComponent} from './cabecera/buscar/buscar.component';
import { theme } from './services/plantillacolor.service';
import { workflow } from './services/workflow.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    dashboardComponent,
    workflowComponent,
    tableroworkflowComponent,
    poComponent,
    BuscarComponent,
    DialogOverviewwf1,
    DialogOverviewExampleDialog 
  
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
    BrowserAnimationsModule,
    MdDialogModule,
    MdListModule,
    FormsModule
  
  ],
  entryComponents: [DialogOverviewExampleDialog],
  providers: [appRoutingProviders, theme, workflow],
  bootstrap: [AppComponent]
})
export class AppModule { }

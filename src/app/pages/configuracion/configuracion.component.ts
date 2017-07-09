import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';


@Component({
  selector: 'r-configuracion',
  templateUrl: 'configuracion.component.html',
})
export class dialogConfiguracion {
  constructor(public dialog: MdDialog) {}

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog);
  }
}


@Component({
  selector: 'dialog-configuracion',
  templateUrl: 'dialog-configuracion.html',
})
export class DialogOverviewExampleDialog {}
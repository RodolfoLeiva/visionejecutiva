'use estrict'
import {Component} from '@angular/core';
import {MdDialog} from '@angular/material';
import { theme } from './../../../services/plantillacolor.service';
import { workflow } from './../../../services/workflow.service';

@Component({
  selector: 'dialog-wf1',
  templateUrl: 'dialog-boton.html',
})
export class DialogOverviewwf1 {
  constructor(private theme:theme,private workflow:workflow,public dialog: MdDialog,) {}

  openDialog() {
    this.dialog.open(DialogOverviewExampleDialog )
  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-configuracion.html',
  styleUrls: [
		'./dialog-configuracion.scss'
    ]
})
export class DialogOverviewExampleDialog {
	 constructor(private theme:theme,private workflow:workflow,public dialog: MdDialog,) {}
	invisible(index:number){
		this.workflow.seinvisible(index);
	}

	visible(index:number){
		this.workflow.sevisible(index);
	}
}
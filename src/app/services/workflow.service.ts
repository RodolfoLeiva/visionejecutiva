import {Injectable} from '@angular/core';
import { workflowicon } from '../pages/workflow/tableroworkflow/tableroworkflow';
export class workflow{
	public tablerowf:workflowicon[];
	public tableroreverso:workflowicon[] = [];

constructor(){
		this.tablerowf =  [
			new workflowicon ('Contratos','3','folder','wfcontratos',true),
			new workflowicon ('Pedidos','1','shopping_cart','wfpedidos',true),
			new workflowicon ('Workflow','7','shopping_basket','wfsolicitudes',true),
			new workflowicon ('Vacaciones','8','airplanemode_active','wfvaczciones',true)
		]

	}

	sevisible(index:number){
		this.tablerowf.push(this.tableroreverso[index]);
		this.tableroreverso.splice(index, 1);
	}

 	seinvisible(index:number){
		this.tableroreverso.push(this.tablerowf[index]);
		this.tablerowf.splice(index, 1);
	}






}


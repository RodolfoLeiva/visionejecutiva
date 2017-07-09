'use estrict'
import { Component } from '@angular/core' ;
import { workflowicon } from './tableroworkflow';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as glob from '../../../global';
import { plantillacolor } from'../../../plantillacolor';

@Component({

selector:'r-tableroworkflow',
templateUrl: './tableroworkflow.component.html',

styleUrls: [
		'./tableroworkflow.css'

    ],

})




export class tableroworkflowComponent	 {
	public opened = true;

    public close(status) {
      console.log(`Dialog result: ${status}`);
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }
	public tablerowf:workflowicon[];
	public estado:boolean;
	public rcolor:plantillacolor;	
	ngOnInit(){
		this.tablerowf =  [
			new workflowicon ('Contratos','3','folder','wfcontratos',true),
			new workflowicon ('Pedidos','1','shopping_cart','wfpedidos',true),
			new workflowicon ('Workflow','7','shopping_basket','wfsolicitudes',true),
			new workflowicon ('Vacaciones','8','airplanemode_active','wfvaczciones',true)
		];
		
			
	   this.rcolor = glob.plantillaactiva;
		
	}
	cambiar_estado(valor){


	this.estado= valor;
	}

}

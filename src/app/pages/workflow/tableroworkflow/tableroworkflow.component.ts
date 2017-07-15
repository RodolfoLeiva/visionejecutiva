'use estrict'
import { Component } from '@angular/core' ;
import { theme } from './../../../services/plantillacolor.service';
import { workflow } from './../../../services/workflow.service';
import {MdDialog} from '@angular/material';

@Component({
selector:'r-tableroworkflow',
templateUrl: './tableroworkflow.component.html',
styleUrls: [
		'./tableroworkflow.scss'
    ]
})

export class tableroworkflowComponent	 {
     constructor( private theme:theme,private workflow:workflow ){}	
	ngOnInit(){		
		console.log(this.workflow.tablerowf);
	}

}


'use estrict'
import { Component } from '@angular/core' ;
import { theme } from './../../services/plantillacolor.service';

@Component({

selector:'r-dashboard',
templateUrl: './dashboard.component.html',
//styleUrls: ['./sidebar.component.css']

})
export class dashboardComponent	 {
	
  constructor( private theme:theme){
		
	}

ngOnInit(){

}
}
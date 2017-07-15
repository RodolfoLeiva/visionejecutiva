import { Component } from '@angular/core';
import { plantillacolor } from './plantillacolor';
import { plantillaactiva }  from './global';
import { theme } from './services/plantillacolor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  public plantillascolores:plantillacolor[];
 
  public rcolor:plantillacolor;	
  constructor( private theme:theme){
		
	}
	ngOnInit(){
		this.plantillascolores =  [	
		];
		this.rcolor = plantillaactiva;
		
	}
}


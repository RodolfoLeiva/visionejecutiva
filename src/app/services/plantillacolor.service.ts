import {Injectable} from '@angular/core';
import { plantillacolor } from '../plantillacolor';
import * as glob from '../global';

@Injectable()
export class theme{
public color:plantillacolor;
	constructor(){
		this.color = glob.plantillaactiva;
	}

}
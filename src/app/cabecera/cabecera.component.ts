import { Component , OnInit} from '@angular/core' ;
import { BuscarComponent} from './buscar/buscar.component'


@Component({

selector:'r-cabecera',
templateUrl: './cabecera.component.html',
styleUrls: ['./cabecera.css'],


})

export class CabeceraComponent implements OnInit {

 

  public ngOnInit(): void {
  
      
  }
  /**
   * Method to toggle application sidenav.
   */
  public toggleSidenav() {
  
  }



}
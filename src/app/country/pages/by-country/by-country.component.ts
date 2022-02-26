import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent {
  
  public termino    : string  = '';
  public existError : boolean = false; 
  public countries  : Country[] = [];
  public placeholder: string = "Buscar país..."; 

  constructor( private paisService: PaisService ) { }
  
  public search( termino: string ): void {
    this.existError = false;
    this.paisService.buscarPais( termino )
      .subscribe(
        countries => {
          this.countries = countries;
        }, 
        error  => {          
          this.existError = true;
          this.countries  = [];     
        }
      );    
  }
}

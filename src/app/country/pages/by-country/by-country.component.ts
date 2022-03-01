import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    
    `
  ] 
})
export class ByCountryComponent {
  
  public placeholder: string = "Buscar país...";
  public termino    : string  = '';
  public countries  : Country[] = [];
  public countriessuggestion : Country[] = [];
  public existError    : boolean = false; 
  public showSuggestion: boolean = false;

  constructor( private paisService: PaisService ) { }
  
  public search( termino: string ): void {
    this.showSuggestion = false;
    this.existError = false;
    this.paisService.searchByCountry( termino )
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

  public suggestion( termino: string ) {
    this.existError = false;
    this.termino = termino;
    this.showSuggestion = true;
    this.paisService.searchByCountry( termino )
      .subscribe(
        paises => this.countriessuggestion = paises.splice(0 , 5),
        (err) => {
          console.log('error', err);
          this.countriessuggestion = []
          
        }
      )   
  }

  public searchSuggestion( termino: string ) {
    this.search( termino );
  }
}

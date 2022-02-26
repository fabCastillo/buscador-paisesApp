import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {

  public termino    : string  = '';
  public existError : boolean = false; 
  public countries  : Country[] = [];
  public placeholder: string = 'Buscar capital...'

  constructor( private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  public search( termino: string ): void {
    this.existError = false;
    this.paisService.buscarCapital( termino )
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

  public sugerencias( termino: string ) {
    this.existError = false;
    console.log( termino );
  }

}

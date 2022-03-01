import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
      margin-bottom: 5px;
    }
  `
  ]
})
export class ByRegionComponent {

  public regionActivada: string    = '';
  public countries     : Country[] = [];
  public regiones      : string[]  = [
    'EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'
  ];

  constructor(
    private paisService: PaisService
  ) { }

  public getCSS( region: string ): string {
    return ( region === this.regionActivada )
      ? 'btn btn-primary'
      : 'btn btn-outline-primary'
  }

  public activarRegion( region: string ) {
    this.regionActivada = region; 
    this.paisService.searchByRegional( region ).subscribe(
      countries => this.countries = countries
    )
  }

}

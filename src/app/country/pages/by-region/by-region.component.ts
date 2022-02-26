import { Component } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [ `
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class ByRegionComponent {

  public regiones: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];
  public regionActivada: string = '';

  constructor() { }

  public activarRegion( region: string ) {
    this.regionActivada = region; 
  }

}

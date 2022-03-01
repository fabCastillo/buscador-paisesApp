import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {
  
  public pais!: Country;

  constructor( 
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {

    // Forma facíl de realizar dos subscribe

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.searchByAlpha( id ) ),
        tap( resp => console.log(resp) )
      )
      .subscribe( 
        pais => this.pais = pais
      )

    // Forma compleja de realizar dos subscribe
    
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => {
    //     this.paisService.buscarPaisporAlpha( id ).subscribe(
    //       pais => console.log( pais )  
    //     )
    //   })
  }

}

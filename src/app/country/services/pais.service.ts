import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient ) { }

  public buscarPais( termino: string ): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  public buscarCapital( termino: string ): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  public buscarPaisporAlpha( id: string ): Observable<Country> {
    const url: string = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>( url );
  }
  
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v2';

  constructor( private http: HttpClient ) { }

  
  public get getHttpParams(): HttpParams {
    return new HttpParams().set(
      'fields', 'flag,name,capital,population,alpha2Code' )
  }
  

  public searchByCountry( termino: string ): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.getHttpParams } );
  }

  public searchByCapital( termino: string ): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.getHttpParams } );
  }

  public searchByAlpha( id: string ): Observable<Country> {
    const url: string = `${this.apiUrl}/alpha/${ id }`;
    return this.http.get<Country>( url );
  }

  public searchByRegional( regional: string ): Observable<Country[]> {
    const url: string = `${this.apiUrl}/regionalbloc/${ regional }`;
    return this.http.get<Country[]>(url, { params: this.getHttpParams });
  }
  
}

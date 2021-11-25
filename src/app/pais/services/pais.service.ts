import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v2';


  constructor(
    private http: HttpClient,
  ) { }


  get httpParams() {
    return new HttpParams()
    .set('fields','name,capital,alpha2Code,flag,population');
  }

  buscarPais(termino: string): Observable<Country[]> {

    const url: string = `${this.apiURL}/name/${termino}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});

  }

  buscarCapital (termino:string): Observable<Country[]> {

    const url: string = `${this.apiURL}/capital/${termino}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});

  }
  buscarPorAlpha (id:string): Observable<Country> {

    const url: string = `${this.apiURL}/alpha/${id}`;

    return this.http.get<Country>(url);

  }
  buscarPorContinente (continente:string): Observable<Country[]> {



    const url: string = `${this.apiURL}/regionalbloc/${continente}`;

    return this.http.get<Country[]>(url,{params:this.httpParams});

  }



}

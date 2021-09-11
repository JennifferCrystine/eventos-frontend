import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorApiModel } from './autor-api-model';
import { AutorModel } from './autor-model';
import { AutorPostModel } from './autor-post-model';

@Injectable({
  providedIn: 'root'
})
export class AutorApiService {

  constructor(private http: HttpClient) { }

  public listarAutores(): Observable<AutorApiModel[]> {
    return this.http.get<AutorApiModel[]>(
      'http://localhost:8080/autores'
    );
  }

  public getById(idAutor : number): Observable<AutorApiModel> {
    return this.http.get<AutorApiModel>(
      'http://localhost:8080/autores/' + idAutor
    );
  }

  public criarAutor(autor : AutorPostModel): Observable<object> {
    return this.http.post<object>(
      'http://localhost:8080/autores/', autor
    );
  }


  public atualizarAutor(idAutor : number, autor : AutorModel): Observable<AutorApiModel> {
    return this.http.put<AutorApiModel>(
      'http://localhost:8080/autores/' + idAutor, autor
    );
  }


  public excluirAutor(idAutor : number): Observable<object> {
    return this.http.delete<object>(
      'http://localhost:8080/autores/' + idAutor
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorApiModel } from '../autor/autor-api-model';
import { ArtigoApiModel } from './artigo-api-model';
import { ArtigoModel } from './artigo-model';
import { ArtigoPostModel } from './artigo-post-model';

@Injectable({
  providedIn: 'root'
})
export class ArtigoApiService {

  constructor(private http : HttpClient) { }

  public listarArtigos(): Observable<ArtigoApiModel[]> {
    return this.http.get<ArtigoApiModel[]>(
      'http://localhost:8080/artigos'
    );
  }

  public getById(idArtigo : number): Observable<ArtigoApiModel> {
    return this.http.get<ArtigoApiModel>(
      'http://localhost:8080/artigos/' + idArtigo
    );
  }

  public criarArtigo(artigo : ArtigoPostModel): Observable<object> {
    return this.http.post<object>(
      'http://localhost:8080/artigos/', artigo
    );
  }


  public atualizarArtigo(idArtigo : number, artigo : ArtigoModel): Observable<ArtigoApiModel> {
    return this.http.put<ArtigoApiModel>(
      'http://localhost:8080/artigos/' + idArtigo, artigo
    );
  }


  public excluirArtigo(idArtigo : number): Observable<object> {
    return this.http.delete<object>(
      'http://localhost:8080/artigos/' + idArtigo
    );
  }

  public autoresDeUmArtigo(idArtigo : number): Observable<AutorApiModel[]> {
    return this.http.get<AutorApiModel[]>(
      'http://localhost:8080/artigos/'+ idArtigo +'/autores'
    );
  }
}

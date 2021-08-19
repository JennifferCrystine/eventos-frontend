import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
      'https://localhost:8080/artigos'
    );
  }

  public getById(idArtigo : number): Observable<ArtigoApiModel> {
    return this.http.get<ArtigoApiModel>(
      'https://localhost:8080/artigos/' + idArtigo
    );
  }

  public criarArtigo(artigo : ArtigoPostModel): Observable<object> {
    return this.http.post<object>(
      'https://localhost:8080/artigos/', artigo
    );
  }


  public atualizarArtigo(idArtigo : number, artigo : ArtigoModel): Observable<ArtigoApiModel> {
    return this.http.put<ArtigoApiModel>(
      'https://localhost:8080/artigos/' + idArtigo, artigo
    );
  }


  public excluirArtigo(idArtigo : number): Observable<object> {
    return this.http.delete<object>(
      'https://localhost:8080/artigos/' + idArtigo
    );
  }

  public autoresDeUmArtigo(idArtigo : number): Observable<ArtigoApiModel[]> {
    return this.http.get<ArtigoApiModel[]>(
      'https://localhost:8080/artigos/'+ idArtigo +'/autores'
    );
  }
}
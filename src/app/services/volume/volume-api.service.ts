import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VolumeApiModel } from './volume-api-model';
import { Observable } from 'rxjs';
import { VolumePostModel } from './volume-post-model';
import { VolumeModel } from './volume-model';
import { ArtigoApiModel } from '../artigo/artigo-api-model';
import { VolumeUpdateModel } from './volume-update-model';

@Injectable({
  providedIn: 'root'
})
export class VolumeApiService {

  constructor(private http : HttpClient) {}

  public listarVolumes(): Observable<VolumeApiModel[]> {
    return this.http.get<VolumeApiModel[]>(
      'http://localhost:8080/volumes'
    );
  }

  public getById(idVolume : number): Observable<VolumeApiModel> {
    return this.http.get<VolumeApiModel>(
      'http://localhost:8080/volumes/' + idVolume
    );
  }

  public criarVolume(volume : VolumePostModel): Observable<object> {
    return this.http.post<object>(
      'http://localhost:8080/volumes/', volume
    );
  }


  public atualizarVolume(idVolume : number, volume : VolumeModel): Observable<VolumeApiModel> {
    return this.http.put<VolumeApiModel>(
      'http://localhost:8080/volumes/' + idVolume, volume
    );
  }


  public excluirVolume(idVolume : number): Observable<object> {
    console.log("entrouuu no api svc");
    return this.http.delete('http://localhost:8080/volumes/' + idVolume);
  }

  public artigosDeUmVolume(idVolume : number): Observable<ArtigoApiModel[]> {
    return this.http.get<ArtigoApiModel[]>(
      'http://localhost:8080/volumes/'+ idVolume +'/artigos'
    );
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtigoModel } from '../artigo/artigo-model';
import { VolumeApiModel } from './volume-api-model';
import { VolumeApiService } from './volume-api.service';
import { VolumeModel } from './volume-model';
import { VolumePostModel } from './volume-post-model';
import { VolumeUpdateModel } from './volume-update-model';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {
  public volumes : VolumeModel[] = [];
  public artigos : ArtigoModel[] = [];
  public volume: VolumeApiModel | undefined;



  constructor(public svc : VolumeApiService) { }

  public listarVolumes(): void {
    this.volumes = [];
    this.svc.listarVolumes().subscribe({
      next: (volumesApi) => {
        volumesApi.forEach(v => this.volumes.push(new VolumeModel(v)));
      }
    })
  }

  public obterVolume(id : number): void {
    this.svc.getById(id).subscribe({
      next: (volumeApi) => {
        this.volume = volumeApi;
      }
    });
  }


  public criarVolume(volume: VolumePostModel): void {
    this.svc.criarVolume(volume).subscribe({
      next: () => {
        this.atualizarVolumes();
      },
    });
  }


  public atualizarVolumes(): void {
    this.listarVolumes();
  }

  public excluirVolume(id: number): void{
    this.svc.excluirVolume(id).subscribe({
      next: () => {
        console.log("deletou");
        this.atualizarVolumes();
      }
    })
  }

  public artigosVolume(idVolume: number): void {
    this.svc.artigosDeUmVolume(idVolume).subscribe({
      next: (artigosApi) => {
        if (artigosApi != null) {
          artigosApi.forEach(a => this.artigos.push(new ArtigoModel(a)));
        }
      }
    })
  }
}

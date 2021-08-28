import { Injectable } from '@angular/core';
import { VolumeApiModel } from './volume-api-model';
import { VolumeApiService } from './volume-api.service';
import { VolumeModel } from './volume-model';
import { VolumePostModel } from './volume-post-model';

@Injectable({
  providedIn: 'root'
})
export class VolumeService {
  public volumes : VolumeModel[] = [];
  volume: VolumeApiModel | undefined;

  constructor(public svc : VolumeApiService) { }

  public listarVolumes(): void {
    this.svc.listarVolumes().subscribe({
      next: (volumes) => {
        volumes.forEach(v => this.volumes.push(new VolumeModel(v)));
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
    this.svc.excluirVolume(id);
  }




}

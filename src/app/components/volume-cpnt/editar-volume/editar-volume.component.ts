import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VolumeModel } from 'src/app/services/volume/volume-model';
import { VolumeUpdateModel } from 'src/app/services/volume/volume-update-model';
import { VolumeService } from 'src/app/services/volume/volume.service';

@Component({
  selector: 'app-editar-volume',
  templateUrl: './editar-volume.component.html',
  styleUrls: ['./editar-volume.component.css']
})
export class EditarVolumeComponent implements OnInit {

  volume: VolumeModel | undefined;

  constructor(public svc: VolumeService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      if (params != null) {
        var tempId: any;
        tempId = params.get('id');
        console.log(tempId);
        var id = Number.parseInt(tempId);
        this.svc.svc.getById(id).subscribe({
          next: (volumeApi) => {
            this.volume = new VolumeModel(volumeApi);
          }
        });
      }
    });
  }

  public atualizarVolume(volume: VolumeModel): void {
    this.svc.svc.atualizarVolume(volume.idVolume, volume).subscribe({
      next: (volumeApi) => {
        if (this.volume != null) {
          this.volume.convertApiToModel(volumeApi);
          console.log(volume);
          this.svc.atualizarVolumes();
        }
      }
    });
  }

}

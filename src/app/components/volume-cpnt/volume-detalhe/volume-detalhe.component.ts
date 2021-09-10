import { Component, OnInit } from '@angular/core';
import { VolumeApiModel } from '../../../services/volume/volume-api-model';
import { ActivatedRoute } from '@angular/router';
import { VolumeService } from 'src/app/services/volume/volume.service';

@Component({
  selector: 'app-volume-detalhe',
  templateUrl: './volume-detalhe.component.html',
  styleUrls: ['./volume-detalhe.component.css']
})
export class VolumeDetalheComponent implements OnInit {

  volume: VolumeApiModel | undefined;

  constructor(
    private _activatedRoute:ActivatedRoute,
    public svc: VolumeService) {

  }


  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      if (params != null) {
        var tempId: any;
        tempId = params.get('id');
        var id = Number.parseInt(tempId);
        this.svc.artigosVolume(id);

        this.svc.svc.getById(id).subscribe({
          next: (volumeApi) => {
            this.volume = volumeApi;
          }
        });
      }
    });
  }

}

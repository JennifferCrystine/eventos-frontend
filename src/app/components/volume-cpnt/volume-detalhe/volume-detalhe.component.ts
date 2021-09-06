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
  tempId: any;
  id: number = 0;

  constructor(
    private _activatedRoute:ActivatedRoute,
    public svc: VolumeService) {

  }


  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      if (params != null) {
        this.tempId = params.get('id');
        this.id = Number.parseInt(this.tempId);
        this.svc.artigosVolume(this.id);
        
        this.svc.svc.getById(this.id).subscribe({
          next: (volumeApi) => {
            this.volume = volumeApi;
          }
        });
      }
    });
  }

}

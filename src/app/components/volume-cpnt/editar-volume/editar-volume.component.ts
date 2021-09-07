import { Component, Input, OnInit } from '@angular/core';
import { VolumeUpdateModel } from 'src/app/services/volume/volume-update-model';
import { VolumeService } from 'src/app/services/volume/volume.service';

@Component({
  selector: 'app-editar-volume',
  templateUrl: './editar-volume.component.html',
  styleUrls: ['./editar-volume.component.css']
})
export class EditarVolumeComponent implements OnInit {
  @Input() volumeUpdate: VolumeUpdateModel = new VolumeUpdateModel();

  constructor(public svc: VolumeService) { }

  ngOnInit(): void {
  }

}

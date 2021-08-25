import { Component, OnInit } from '@angular/core';
import { VolumePostModel } from 'src/app/services/volume/volume-post-model';
import { VolumeService } from 'src/app/services/volume/volume.service';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent implements OnInit {
  volumeModel: VolumePostModel = new VolumePostModel();

  constructor(public svc : VolumeService) { }


  ngOnInit(): void {
    this.svc.listarVolumes();
    console.log(this.svc.volumes);
  }

}

import { Component, OnInit } from '@angular/core';
import { VolumeService } from 'src/app/services/volume/volume.service';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent implements OnInit {

  constructor(public svc : VolumeService) { }


  ngOnInit(): void {
    this.svc.listarVolumes();
    console.log(this.svc.volumes);
  }

}

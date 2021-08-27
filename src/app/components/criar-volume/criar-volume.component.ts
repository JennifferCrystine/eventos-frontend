import { Component, OnInit } from '@angular/core';
import { VolumePostModel } from 'src/app/services/volume/volume-post-model';
import { VolumeService } from 'src/app/services/volume/volume.service';

@Component({
  selector: 'app-criar-volume',
  templateUrl: './criar-volume.component.html',
  styleUrls: ['./criar-volume.component.css']
})
export class CriarVolumeComponent implements OnInit {
  volumeModel: VolumePostModel = new VolumePostModel();

  constructor(public svc : VolumeService) { }

  ngOnInit(): void {
  }

}

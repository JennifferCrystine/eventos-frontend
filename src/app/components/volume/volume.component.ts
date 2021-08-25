import { Component, Input, OnInit } from '@angular/core';
import { VolumeModel } from 'src/app/services/volume/volume-model';
import { VolumePostModel } from 'src/app/services/volume/volume-post-model';
import { VolumeService } from 'src/app/services/volume/volume.service';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  @Input() volume: VolumeModel | undefined;

  constructor(public svc : VolumeService) { }

  public excluirVolume(id: number): void{
    this.svc.excluirVolume(id);
  }

  ngOnInit(): void {
  }

}

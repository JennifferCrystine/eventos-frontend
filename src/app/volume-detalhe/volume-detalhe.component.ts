import { Component, Input, OnInit } from '@angular/core';
import { VolumeApiModel } from '../services/volume/volume-api-model';

@Component({
  selector: 'app-volume-detalhe',
  templateUrl: './volume-detalhe.component.html',
  styleUrls: ['./volume-detalhe.component.css']
})
export class VolumeDetalheComponent implements OnInit {

  @Input() volume: VolumeApiModel | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

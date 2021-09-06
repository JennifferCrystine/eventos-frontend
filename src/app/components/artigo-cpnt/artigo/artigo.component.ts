import { Component, Input, OnInit } from '@angular/core';
import { ArtigoModel } from 'src/app/services/artigo/artigo-model';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {
  @Input() artigo: ArtigoModel | undefined;

  constructor() { }

  ngOnInit(): void {

  }

}

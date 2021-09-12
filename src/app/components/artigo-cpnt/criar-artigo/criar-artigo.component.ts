import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtigoPostModel } from 'src/app/services/artigo/artigo-post-model';
import { ArtigoService } from 'src/app/services/artigo/artigo.service';

@Component({
  selector: 'app-criar-artigo',
  templateUrl: './criar-artigo.component.html',
  styleUrls: ['./criar-artigo.component.css']
})
export class CriarArtigoComponent implements OnInit {
  artigoModel: ArtigoPostModel = new ArtigoPostModel();
  idVolume: number = 0;

  constructor(public svc: ArtigoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      if (params != null) {
        var tempId: any;
        tempId = params.get('id');
        this.idVolume = Number.parseInt(tempId);
        console.log(this.idVolume);
      }
    });
  }

}

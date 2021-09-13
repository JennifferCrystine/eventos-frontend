import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorPostModel } from 'src/app/services/autor/autor-post-model';
import { AutorService } from 'src/app/services/autor/autor.service';

@Component({
  selector: 'app-criar-autor',
  templateUrl: './criar-autor.component.html',
  styleUrls: ['./criar-autor.component.css']
})
export class CriarAutorComponent implements OnInit {
  autor: AutorPostModel = new AutorPostModel();
  idArtigo: number = 0;

  constructor(public svc: AutorService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      if (params != null) {
        var tempId: any;
        tempId = params.get('id');
        this.idArtigo = Number.parseInt(tempId);
        console.log("ID:", this.idArtigo);
      }
    });
  }

}

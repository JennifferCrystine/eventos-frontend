import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtigoModel } from 'src/app/services/artigo/artigo-model';
import { AutorModel } from 'src/app/services/autor/autor-model';
import { AutorService } from 'src/app/services/autor/autor.service';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, public svc: AutorService) { }
  autor: AutorModel | undefined;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      if (params != null) {
        var tempId: any;
        tempId = params.get('id');
        var id = Number.parseInt(tempId);
        this.svc.svc.getById(id).subscribe({
          next: (artigoApi) => {
            this.autor = new AutorModel(artigoApi);
          }
        });
      }
    });
  }
}

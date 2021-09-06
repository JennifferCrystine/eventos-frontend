import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtigoApiModel } from 'src/app/services/artigo/artigo-api-model';
import { ArtigoService } from 'src/app/services/artigo/artigo.service';

@Component({
  selector: 'app-artigo-detalhe',
  templateUrl: './artigo-detalhe.component.html',
  styleUrls: ['./artigo-detalhe.component.css']
})
export class ArtigoDetalheComponent implements OnInit {
  public artigo: ArtigoApiModel | undefined;

  constructor(private _activatedRoute: ActivatedRoute, public svc: ArtigoService) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      if (params != null) {
        var tempId: any;
        tempId = params.get('id');
        var id = Number.parseInt(tempId);
        this.svc.svc.getById(id).subscribe({
          next: (artigoApi) => {
            this.artigo = artigoApi;
            console.log(this.artigo);
          }
        });
      }
    });
  }

}

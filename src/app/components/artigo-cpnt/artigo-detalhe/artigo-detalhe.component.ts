import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtigoApiModel } from 'src/app/services/artigo/artigo-api-model';
import { ArtigoService } from 'src/app/services/artigo/artigo.service';
import { AutorApiModel } from 'src/app/services/autor/autor-api-model';
import { AutorModel } from 'src/app/services/autor/autor-model';

@Component({
  selector: 'app-artigo-detalhe',
  templateUrl: './artigo-detalhe.component.html',
  styleUrls: ['./artigo-detalhe.component.css']
})
export class ArtigoDetalheComponent implements OnInit {
  public artigo: ArtigoApiModel | undefined;
  public autores: AutorModel[] = [];

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
            this.svc.svc.autoresDeUmArtigo(id).subscribe({
              next: () => {
                if (this.artigo != null) {
                  console.log(this.artigo.idArtigo);
                  this.svc.svc.autoresDeUmArtigo(this.artigo.idArtigo).subscribe({
                    next: (autoresApi) => {
                      this.autores = [];
                      console.log(this.autores);
                      autoresApi.forEach(v => this.autores.push(new AutorModel(v)));
                    }
                  });
                }
              }
            })
          }
        });
      }
    });
  }
}

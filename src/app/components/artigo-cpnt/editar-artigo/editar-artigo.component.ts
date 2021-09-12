import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtigoModel } from 'src/app/services/artigo/artigo-model';
import { ArtigoService } from 'src/app/services/artigo/artigo.service';

@Component({
  selector: 'app-editar-artigo',
  templateUrl: './editar-artigo.component.html',
  styleUrls: ['./editar-artigo.component.css']
})
export class EditarArtigoComponent implements OnInit {
  public artigo: ArtigoModel | undefined;

  constructor(public svc: ArtigoService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      if (params != null) {
        var tempId: any;
        tempId = params.get('id');
        console.log(tempId);
        var id = Number.parseInt(tempId);
        this.svc.svc.getById(id).subscribe({
          next: (artigoApi) => {
            this.artigo = new ArtigoModel(artigoApi);
          }
        });
      }
    });
  }

  public atualizarArtigo(artigo: ArtigoModel): void {
    this.svc.svc.atualizarArtigo(artigo.idArtigo, artigo).subscribe({
      next: (artigoApi) => {
        if (this.artigo != null) {
          this.artigo.convertApiToModel(artigoApi);
          this.svc.atualizarArtigos();
        }
      }
    });
  }

}

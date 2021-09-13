import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AutorModel } from 'src/app/services/autor/autor-model';
import { AutorService } from 'src/app/services/autor/autor.service';

@Component({
  selector: 'app-editar-autor',
  templateUrl: './editar-autor.component.html',
  styleUrls: ['./editar-autor.component.css']
})
export class EditarAutorComponent implements OnInit {
  public autor: AutorModel | undefined;

  constructor(public svc: AutorService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(params => {
      if (params != null) {
        var tempId: any;
        tempId = params.get('id');
        console.log(tempId);
        var id = Number.parseInt(tempId);
        this.svc.svc.getById(id).subscribe({
          next: (autorApi) => {
            this.autor = new AutorModel(autorApi);
          }
        });
      }
    });
  }

  public atualizarAutor(autor: AutorModel): void {
    this.svc.svc.atualizarAutor(autor.idAutor, autor).subscribe({
      next: (autorApi) => {
        if (this.autor != null) {
          this.autor.convertApiToModel(autorApi);
          this.svc.svc.getById(this.autor.idAutor).subscribe({
            next : (autorApi) => {
              if (this.autor != null) {
                this.autor.convertApiToModel(autorApi);
              }
            }
          });
        }
      }
    });
  }

}

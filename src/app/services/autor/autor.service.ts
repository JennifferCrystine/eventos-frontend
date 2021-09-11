import { Injectable } from '@angular/core';
import { AutorApiModel } from './autor-api-model';
import { AutorApiService } from './autor-api.service';
import { AutorModel } from './autor-model';
import { AutorPostModel } from './autor-post-model';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  public autores : AutorModel[] = [];
  autor: AutorApiModel | undefined;

  constructor(public svc: AutorApiService) { }

  public listarAutores(): void {
    this.autores = [];
    this.svc.listarAutores().subscribe({
      next: (autorApi) => {
        autorApi.forEach(v => this.autores.push(new AutorModel(v)));
      }
    })
  }

  public obterAutor(id : number): void {
    this.svc.getById(id).subscribe({
      next: (autorApi) => {
        this.autor = autorApi;
      }
    });
  }

  public criarAutor(Autor: AutorPostModel): void {

    this.svc.criarAutor(Autor).subscribe({
      next: () => {
        this.atualizarAutores();
      },
    });
  }

  public atualizarAutores(): void {
    this.listarAutores();
  }

  public excluirAutor(id: number): void{
    this.svc.excluirAutor(id);
  }
}

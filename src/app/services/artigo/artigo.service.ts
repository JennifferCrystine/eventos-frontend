import { Injectable } from '@angular/core';
import { ArtigoApiModel } from './artigo-api-model';
import { ArtigoApiService } from './artigo-api.service';
import { ArtigoModel } from './artigo-model';
import { ArtigoPostModel } from './artigo-post-model';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {
  public artigos : ArtigoModel[] = [];
  artigo: ArtigoApiModel | undefined;

  constructor(public svc: ArtigoApiService) { }

  public listarArtigos(): void {
    this.artigos = [];
    this.svc.listarArtigos().subscribe({
      next: (artigosApi) => {
        artigosApi.forEach(v => this.artigos.push(new ArtigoModel(v)));
      }
    });
  }

  public obterArtigo(id : number): void {
    this.svc.getById(id).subscribe({
      next: (artigoApi) => {
        this.artigo = artigoApi;
      }
    });
  }

  public criarArtigo(idVolume: number, artigo: ArtigoPostModel): void {
    console.log(artigo);
    artigo.idVolume = idVolume;
    this.svc.criarArtigo(artigo).subscribe({
      next: () => {
        this.atualizarArtigos();
      },
    });
  }

  public atualizarArtigos(): void {
    this.listarArtigos();
  }

  public excluirArtigo(id: number): void{
    this.svc.excluirArtigo(id).subscribe({
      next: () => {
        this.atualizarArtigos();
      }
    });
  }
}

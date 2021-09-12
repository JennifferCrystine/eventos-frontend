import { Component, Input, OnInit } from '@angular/core';
import { ArtigoModel } from 'src/app/services/artigo/artigo-model';
import { ArtigoService } from 'src/app/services/artigo/artigo.service';

@Component({
  selector: 'app-artigo',
  templateUrl: './artigo.component.html',
  styleUrls: ['./artigo.component.css']
})
export class ArtigoComponent implements OnInit {
  @Input() artigo: ArtigoModel | undefined;

  constructor(public svc: ArtigoService) { }

  ngOnInit(): void {}

  public excluirArtigo(id: number): void{
    this.svc.excluirArtigo(id);
    this.svc.atualizarArtigos();
  }

}

import { ArtigoApiModel } from "./artigo-api-model";

export class ArtigoModel {
  constructor(artigoApi: ArtigoApiModel
    ){
      this.idArtigo = artigoApi.idArtigo;
      this.idVolume = artigoApi.idVolume;
      this.autores = artigoApi.autores;
      this.idioma = artigoApi.idioma;
      this.ordemArtigo = artigoApi.ordemArtigo;
      this.titulo = artigoApi.titulo;
      this.tituloEn = artigoApi.tituloEn;
      this.resumo = artigoApi.resumo;
      this.resumoEn = artigoApi.resumoEn;
      this.palavrasChaves = artigoApi.palavrasChaves;
      this.palavrasChavesEn = artigoApi.palavrasChavesEn;
      this.numeroPaginas = artigoApi.numeroPaginas;
    }

  public idArtigo: number;

  public titulo: string;

  public tituloEn: string;

  public idVolume: number;

  public autores: {};

  public ordemArtigo: number;

  public idioma: string;

  public resumo: string;

  public resumoEn: string;

  public palavrasChaves: string;

  public palavrasChavesEn: string;

  public numeroPaginas: number;

  public convertApiToModel(artigoApi: ArtigoApiModel) : void {
    this.idArtigo = artigoApi.idArtigo;
    this.idVolume = artigoApi.idVolume;
    this.autores = artigoApi.autores;
    this.idioma = artigoApi.idioma;
    this.ordemArtigo = artigoApi.ordemArtigo;
    this.titulo = artigoApi.titulo;
    this.tituloEn = artigoApi.tituloEn;
    this.resumo = artigoApi.resumo;
    this.resumoEn = artigoApi.resumoEn;
    this.palavrasChaves = artigoApi.palavrasChaves;
    this.palavrasChavesEn = artigoApi.palavrasChavesEn;
    this.numeroPaginas = artigoApi.numeroPaginas;
  }
}

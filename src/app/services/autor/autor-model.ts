import { AutorApiModel } from "./autor-api-model";

export class AutorModel {
  constructor(autorApi: AutorApiModel){
    this.idAutor = autorApi.idAutor;
    this.idArtigo = autorApi.idArtigo;
    this.ordemAutor = autorApi.ordemAutor;
    this.email = autorApi.email;
    this.primeiroNome = autorApi.primeiroNome;
    this.nomeMeio = autorApi.nomeMeio;
    this.sobrenome = autorApi.sobrenome;
    this.afiliacao = autorApi.afiliacao;
    this.afiliacaoEn = autorApi.afiliacaoEn;
    this.pais = autorApi.pais;
    this.orcId = autorApi.orcId;
  }
  idAutor: Number;

  idArtigo: Number;

  ordemAutor: Number;

  email: string;

  primeiroNome: string;

  nomeMeio: string;

  sobrenome: string;

  afiliacao: string;

  afiliacaoEn: string;

  pais: string;

  orcId: string;

  public convertApiToModel(autorApi: AutorApiModel){
    this.idAutor = autorApi.idAutor;
    this.idArtigo = autorApi.idArtigo;
    this.ordemAutor = autorApi.ordemAutor;
    this.email = autorApi.email;
    this.primeiroNome = autorApi.primeiroNome;
    this.nomeMeio = autorApi.nomeMeio;
    this.sobrenome = autorApi.sobrenome;
    this.afiliacao = autorApi.afiliacao;
    this.afiliacaoEn = autorApi.afiliacaoEn;
    this.pais = autorApi.pais;
    this.orcId = autorApi.orcId;
  }

}

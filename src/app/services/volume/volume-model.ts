export class VolumeModel {
  constructor(
    idVolume: number,
    numeroEdicao: number,
    siglaEvento: string,
    cidade: string,
    dataInicio: Date,
    descricaoPt: string,
    descricaoEn: string,
    artigos : {}
  ){

    this.idVolume = idVolume;
    this.numeroEdicao = numeroEdicao;
    this.siglaEvento = siglaEvento;
    this.cidade = cidade;
    this.dataInicio = dataInicio;
    this.descricaoPt = descricaoPt;
    this.descricaoEn = descricaoEn;
    this.artigos = artigos;
  }
  public idVolume: number;

  public numeroEdicao: number;

  public siglaEvento: string;

  public cidade: string;

  public dataInicio: Date;

  public descricaoPt: string;

  public descricaoEn: string;

  public artigos : {}
}

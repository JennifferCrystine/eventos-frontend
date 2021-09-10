
import { VolumeApiModel } from './volume-api-model'

export class VolumeModel {
  constructor(volumeApi : VolumeApiModel){

    this.idVolume = volumeApi.idVolume;
    this.numeroEdicao = volumeApi.numeroEdicao;
    this.siglaEvento = volumeApi.siglaEvento;
    this.cidade = volumeApi.cidade;
    this.dataInicio = new Date(volumeApi.dataInicio);
    this.descricaoPt = volumeApi.descricaoPt;
    this.descricaoEn = volumeApi.descricaoEn;
    this.artigos = volumeApi.artigos;
  }
  public idVolume: number;

  public numeroEdicao: number;

  public siglaEvento: string;

  public cidade: string;

  public dataInicio: Date;

  public descricaoPt: string;

  public descricaoEn: string;

  public artigos : {};

  public convertApiToModel(volumeApi: VolumeApiModel) : void {
    this.idVolume = volumeApi.idVolume;
    this.numeroEdicao = volumeApi.numeroEdicao;
    this.siglaEvento = volumeApi.siglaEvento;
    this.cidade = volumeApi.cidade;
    this.dataInicio = new Date(volumeApi.dataInicio);
    this.descricaoPt = volumeApi.descricaoPt;
    this.descricaoEn = volumeApi.descricaoEn;
    this.artigos = volumeApi.artigos;
  }


}

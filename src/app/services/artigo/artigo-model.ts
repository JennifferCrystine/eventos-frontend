export class ArtigoModel {
  constructor(
    idArtigo: number,
    idVolume: number,
    autores: {},
    ordemArtigo: number,
    idioma: string,
    titulo: string,
    tituloEn: string,
    resumo: string,
    resumoEn: string,
    palavrasChaves: string,
    palavrasChavesEn: string,
    numeroPaginas: number
    ){
      this.idArtigo = idArtigo;
      this.idVolume = idVolume;
      this.autores = autores;
      this.idioma = idioma;
      this.ordemArtigo = ordemArtigo;
      this.titulo = titulo;
      this.tituloEn = tituloEn;
      this.resumo = resumo;
      this.resumoEn = resumoEn;
      this.palavrasChaves = palavrasChaves;
      this.palavrasChavesEn = palavrasChavesEn;
      this.numeroPaginas = numeroPaginas;
    }

  public idArtigo: number;

  public idVolume: number;

  public autores: {};

  public ordemArtigo: number;

  public idioma: string;

  public titulo: string;

  public tituloEn: string;

  public resumo: string;

  public resumoEn: string;

  public palavrasChaves: string;

  public palavrasChavesEn: string;

  public numeroPaginas: number;
}

export default class Item {  
  altura: number;
  largura: number;
  profundidade: number;
  peso: number;

  constructor(readonly idItem: number,
              readonly description: string,
              readonly price: number,
              altura: number,
              largura: number,
              profundidade: number,
              peso: number,
              ){
    this.altura = altura;
    this.largura = largura;
    this.profundidade = profundidade;
    this.peso = peso;
  }

  getVolume() {
    return (this.altura * this.largura * this.profundidade) / 1000000;
  }

  getDensidade() {
    return Math.trunc(this.peso / this.getVolume());
  }

}
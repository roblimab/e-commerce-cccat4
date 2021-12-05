export default class Shipping {
  distancia: number;
  volume: number;
  densidade: number;

  constructor(distancia: number, volume: number, densidade: number){
    this.distancia = distancia;
    this.volume = volume;
    this.densidade = densidade;
  }

  getPrice(){
    const minimunPrice = 10;
    const price = this.distancia * this.volume * (this.densidade / 100)
    return price < minimunPrice ? minimunPrice : price;
  }
}
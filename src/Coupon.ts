export default class Coupon {
  expirationDate: Date;

	constructor (readonly code: string, readonly percentage: number, expirationDate = new Date()) {
    this.expirationDate = new Date(expirationDate.toDateString());
	}

  isExpired(){
    if(this.expirationDate < new Date(new Date().toDateString())){
      return true;
    }
  }
}

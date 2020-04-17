// Business logic interface

export class GalacticAge {
  constructor() {
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86
  }
  mercuryCalc(earthAge, ) {
    return Math.floor(earthAge / this.mercury);
  }
  venusCalc(earthAge, ) {
    return Math.floor(earthAge / this.venus);
  }
  marsCalc(earthAge, ) {
    return Math.floor(earthAge / this.mars);
  }
  jupiterCalc(earthAge, ) {
    return Math.floor(earthAge / this.jupiter);
  }
  
}
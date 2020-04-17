// Business logic interface

export class GalacticAge {
  constructor() {
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86
  }

  ageCalc(earthAge, planet) {
    return Math.floor(earthAge / this[{ planet }]);
  }
}
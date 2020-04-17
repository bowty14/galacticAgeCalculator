// Business logic interface

export class GalacticAge {
  constructor() {
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
    this.earthAge = earthAge;
  }
  // Age on Mercury
  mercuryCalc(earthAge) {
    return Math.floor(earthAge / this.mercury);
  }
  // Age on Venus
  venusCalc(earthAge) {
    return Math.floor(earthAge / this.venus);
  }
  // Age on Jars
  marsCalc(earthAge) {
    return Math.floor(earthAge / this.mars);
  }
  // Age on Jupiter
  jupiterCalc(earthAge) {
    return Math.floor(earthAge / this.jupiter);
  }
  // Life expectany on Mercury
  leMercury(earthAge) {
    return Math.floor(earthAge / this.mercury);
  }
  // Life expectany on Venus
  leVenus(earthAge) {
    return Math.floor(earthAge / this.venus);
  }
  // Life expectany on Mars
  leMars(earthAge) {
    return Math.floor(earthAge / this.mars);
  }
  // Life expectancy on Jupiter
  leJupiter(earthAge) {
    return Math.floor(earthAge / this.jupiter);
  }
  
}
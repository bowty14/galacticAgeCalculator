// Business logic interface

export class GalacticAge {
  constructor(earthAge) {
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
    this.earthAge = earthAge;
  }
  // Age on Mercury
  mercuryCalc() {
    return Math.floor(this.earthAge / this.mercury);
  }
  // Age on Venus
  venusCalc() {
    return Math.floor(this.earthAge / this.venus);
  }
  // Age on Jars
  marsCalc() {
    return Math.floor(this.earthAge / this.mars);
  }
  // Age on Jupiter
  jupiterCalc() {
    return Math.floor(this.earthAge / this.jupiter);
  }
  // Life expectany on Mercury
  leMercury() {
    return Math.floor(this.earthAge / this.mercury);
  }
  // Life expectany on Venus
  leVenus() {
    return Math.floor(this.earthAge / this.venus);
  }
  // Life expectany on Mars
  leMars() {
    return Math.floor(this.earthAge / this.mars);
  }
  // Life expectancy on Jupiter
  leJupiter() {
    return Math.floor(this.earthAge / this.jupiter);
  }
  
}
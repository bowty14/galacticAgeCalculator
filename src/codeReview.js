// Business logic interface
import { inputtedAge } from '../src/main.js';
import { inputtedPlanet } from '../src/main.js';
import { inputtedLE } from '../src/main.js';

export class GalacticAge {
  constructor() {
    this.mercury = .24;
    this.venus = .62;
    this.mars = 1.88;
    this.jupiter = 11.86;
    this.earthAge = earthAge;
  }
  // Age on Mercury

  mercuryCalc() {
    if (inputtedPlanet === "Mercury")
    return Math.floor(inputtedAge / this.mercury);
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
  leMercury() {
    if (inputtedPlanet === "Mercury")
    return Math.floor(inputtedLE / this.mercury);
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
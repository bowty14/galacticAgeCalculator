import { GalacticAge} from '../src/codeReview.js';

describe('GalacticAge', () => {

  test('constructor holds Mercury year value compared to earth year', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.mercury).toEqual(.24)
  }); 
  test('constructor holds Venus year value compared to earth year', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.venus).toEqual(.62)
  }); 
  test('constructor holds Mars year value compared to earth year', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.mars).toEqual(1.88)
  }); 
  test('constructor holds Jupiter year value compared to earth year', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.jupiter).toEqual(11.86)
  }); 
  test('ageCalc runs though divsion to determin age on mercury', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.mercuryCalc(24, galacticage.mercury)).toEqual(100);
  });
  test('ageCalc runs though divsion to determin age on Venus', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.venusCalc(24, galacticage.mercury)).toEqual(38);
  });
  test('ageCalc runs though divsion to determin age on Mars', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.marsCalc(24, galacticage.mars)).toEqual(12);
  });
  test('ageCalc runs though divsion to determin age on Jupiter', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.jupiterCalc(24, galacticage.jupiter)).toEqual(2);
  });
  test('calculate life expectany on Mercury', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.leMercury(102, galacticage.mercury)).toEqual(425);
  });
  test('calculate life expectany on Venus', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.leVenus(102, galacticage.venusCalc)).toEqual(164);
  });
  test('calculate life expectany on Mars', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.leMars(102, galacticage.mars)).toEqual(54);
  });
  test('calculate life expectany on Jupiter', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.leJupiter(102, galacticage.jupiter)).toEqual(8);
  });
});






// 
// expect(galacticage.leVenus(102, galacticage.venus)).toEqual(164);
// expect(galacticage.leMars(102, galacticage.mars)).toEqual(54);
// expect(galacticage.leJupiter(102, galacticage.jupiter)).toEqual(8);
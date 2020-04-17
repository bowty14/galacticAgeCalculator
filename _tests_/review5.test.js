import { GalacticAge} from '../src/codeReview.js';

describe('GalacticAge', () => {

  test('constructor holds planet year value compared to earth year', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.mercury).toEqual(.24);
    expect(galacticage.venus).toEqual(.62);
    expect(galacticage.mars).toEqual(1.88);
    expect(galacticage.jupiter).toEqual(11.86);
  }); 
  test('ageCalc runs though divsion to determin age on other planets', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.ageCalc(24, galacticage.venus).toEqual(100));
   })
  
});
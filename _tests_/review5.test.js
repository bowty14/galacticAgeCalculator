import { GalacticAge} from '../src/codeReview.js';

describe('GalacticAge', () => {

  test('age constructor holds values', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.mercury).toEqual(.24);
    expect(galacticage.venus).toEqual(0);
    expext(galacticage.mars).toEqual(0);
    expect(galacticage.jupiter).toEqual(0);
  }); 
});
import { GalacticAge} from '../src/codeReview.js';

describe('GalacticAge', () => {

  test('age constructor holds values', () => {
    let galacticage = new GalacticAge();
    expect(galacticage.mercury).toEqual(.24);
  }); 
});
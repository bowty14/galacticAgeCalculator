import { GalacticAge } from '../src/codeReview.js';

describe('GalacticAge', () => {

  test('age constructor holds values', () => {
    let earthAge = new GalacticAge(birthday,lifeExpectancy);
    expect(earthAge.birthday).toEqual("");
    expect(earthAge.lifeExpectancy).toEqual("");
    expect(eathAge.earthDay).toEqual(0);
  }); 
});
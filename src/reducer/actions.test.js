import {countResults, formatTime} from './actions';
import {answers} from '../mocks/answers';

describe(`Actions works as expeced`, () => {
  it(`Points get counted correctly`, () => {
    const results = countResults(answers);
    expect(results).toMatchObject({
      points: 4,
      fast: 3,
    });
  });
  it(`Time gets counted correctly`, () => {
    const testingTime = 195;
    const time = formatTime(testingTime);
    expect(time).toMatchObject({
      min: `03`,
      sec: `15`,
    });
    const testingTime2 = 125;
    const time2 = formatTime(testingTime2);
    expect(time2).toMatchObject({
      min: `02`,
      sec: `05`,
    });
  });
});

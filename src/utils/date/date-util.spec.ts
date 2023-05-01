import { dateFormat } from '../../constants';
import { toDateString } from './date-util';

describe('Date Utility', () => {
  it('should convert the date format successfully', () => {
    let dateObj = toDateString(new Date('2021/11/22'), dateFormat);
    expect(dateObj).toBe('22nd November 2021');
  });
});

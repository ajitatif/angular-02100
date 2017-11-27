import { CasePipe } from './case.pipe';

describe('CasePipe', () => {
  it('create an instance', () => {
    const pipe = new CasePipe();
    expect(pipe).toBeTruthy();
  });

  it('should convert to uppercase when parameter is "upper"', () => {
    const pipe = new CasePipe();
    expect(pipe.transform('abc', 'upper')).toBe('ABC');
  });

  it('should convert to lowercase when parameter is "lower"', () => {
    const pipe = new CasePipe();
    expect(pipe.transform('aBC', 'lower')).toBe('abc');
  });

  it('should convert to uppercase when parameter is not given', () => {
    const pipe = new CasePipe();
    expect(pipe.transform('abc')).toBe('ABC');
  });
});

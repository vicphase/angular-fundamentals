import { EmptyPipe } from './empty.pipe';

describe('EmptyPipe', () => {
  let pipe: EmptyPipe;

  beforeEach(() => {
    pipe = new EmptyPipe();
  });

  it('should return the value if it is NOT empty', () => {
    expect(pipe.transform('test')).toBe('test');
  });

  it('should return the passed `args` if the value is empty', () => {
    expect(pipe.transform('', 'default')).toBe('default');
  });

  it('should return `N/A` if the value AND the args are empty', () => {
    expect(pipe.transform('')).toBe('N/A');
  });
});

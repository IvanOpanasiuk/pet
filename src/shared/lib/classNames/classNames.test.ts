import classNames from 'shared/lib/classNames/classNames';
describe('className', () => {
  test('test', () => {
    expect(classNames('testClass')).toBe('testClass');
  });
  test('with additional class', () => {
    const expected = 'testClass class2 class3';
    expect(classNames('testClass', {}, ['class2', 'class3'])).toBe(expected);
  });
  test('with mods', () => {
    const expected = 'testClass class2 class3 hover';
    expect(classNames('testClass', { hover: true }, ['class2', 'class3'])).toBe(expected);
  });
  test('with mod false', () => {
    const expected = 'testClass class2 class3';
    expect(classNames('testClass', { hover: false }, ['class2', 'class3'])).toBe(expected);
  });
  test('with mod undefined', () => {
    const expected = 'testClass class2 class3';
    expect(classNames('testClass', { hover: undefined }, ['class2', 'class3'])).toBe(expected);
  });
});

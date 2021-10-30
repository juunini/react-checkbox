import randomID from './randomID';

test('randomID should be return mixed random alphabet and number string', () => {
  expect(randomID()).toMatch(/[a-zA-Z0-9]/gi);
});

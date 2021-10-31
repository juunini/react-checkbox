import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input styled component is', () => {
  context('When given location is "before"', () => {
    it('Should be style "left" is 0 and no have "right"', () => {
      render(<Input type="checkbox" location="before" checkboxStyle={{}} />);

      expect(screen.getByRole('checkbox')).toHaveStyleRule('left', '0');
      expect(screen.getByRole('checkbox')).not.toHaveStyleRule('right', '0');
    });
  });

  context('When given location is "after"', () => {
    it('Should be style "right" is 0 and no have "left"', () => {
      render(<Input type="checkbox" location="after" checkboxStyle={{}} />);

      expect(screen.getByRole('checkbox')).toHaveStyleRule('right', '0');
      expect(screen.getByRole('checkbox')).not.toHaveStyleRule('left', '0');
    });
  });
});

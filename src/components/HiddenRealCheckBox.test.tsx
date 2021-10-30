import { render, screen } from '@testing-library/react';

import HiddenRealCheckBox from './HiddenRealCheckBox';

describe('HiddenRealCheckBox styled is', () => {
  context('When checkboxPosition is "before"', () => {
    it('Should style left is 0', () => {
      render(<HiddenRealCheckBox type="checkbox" checkboxPosition="before" />);

      expect(screen.getByRole('checkbox')).toHaveStyleRule('left', '0');
    });
  });

  context('When checkboxPosition is "after"', () => {
    it('Should style right is 0', () => {
      render(<HiddenRealCheckBox type="checkbox" checkboxPosition="after" />);

      expect(screen.getByRole('checkbox')).toHaveStyleRule('right', '0');
    });
  });
});

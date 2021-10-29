import { render, screen, fireEvent } from '@testing-library/react';

import CheckBox from '.';

describe('CheckBox Component is', () => {
  context('When click checkbox', () => {
    const onChange: () => void = jest.fn();

    it('Should be calls onChange', () => {
      render((
        <CheckBox
          checked={false}
          onChange={onChange}
        />
      ));

      fireEvent.click(
        screen.getByRole('checkbox'),
      );

      expect(onChange).toBeCalled();
    });
  });
});

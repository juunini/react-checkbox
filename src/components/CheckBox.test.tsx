import { render, screen, fireEvent } from '@testing-library/react';

import CheckBox from './CheckBox';

describe('CheckBox component is', () => {
  context('When click CheckBox', () => {
    const onChange = jest.fn();

    it('Should be calls onChange', () => {
      render((
        <CheckBox checked={false} onChange={onChange} />
      ));

      fireEvent.click(screen.getByRole('checkbox'));

      expect(onChange).toBeCalled();
    });
  });

  context('When given type is "radio"', () => {
    const givenType: 'radio' = 'radio';

    it('Should be render "radio" type input', () => {
      const { container } = render((
        <CheckBox checked={false} onChange={jest.fn()} type={givenType} />
      ));

      expect(container.querySelector('input')?.type).toBe('radio');
    });
  });
});

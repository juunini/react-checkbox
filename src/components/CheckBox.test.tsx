import { render, screen, fireEvent } from '@testing-library/react';

import CheckBox from './CheckBox';

function renderCheckBox(args: any) {
  return render((
    // eslint-disable-next-line react/jsx-props-no-spreading
    <CheckBox checked={false} onChange={args.onChange || jest.fn()} {...args} />
  ));
}

describe('CheckBox component is', () => {
  context('When click CheckBox', () => {
    const onChange = jest.fn();

    it('Should be calls onChange', () => {
      renderCheckBox({ onChange });

      fireEvent.click(screen.getByRole('checkbox'));

      expect(onChange).toBeCalled();
    });
  });

  context('When given type is "radio"', () => {
    const givenType: 'radio' = 'radio';

    it('Should be render "radio" type input', () => {
      renderCheckBox({ type: givenType });

      expect(screen.getByRole('radio')).toBeInTheDocument();
    });
  });

  context('When given location is "before"', () => {
    const givenLocation: 'before' = 'before';

    it('Should be "left" is 0 and no "right"', () => {
      renderCheckBox({ location: givenLocation });

      expect(screen.getByRole('checkbox')).not.toHaveStyleRule('right', '0');
      expect(screen.getByRole('checkbox')).toHaveStyleRule('left', '0');
    });
  });

  context('When given location is "after"', () => {
    const givenLocation: 'after' = 'after';

    it('Should be no "left" and "right" is 0', () => {
      renderCheckBox({ location: givenLocation });

      expect(screen.getByRole('checkbox')).toHaveStyleRule('right', '0');
      expect(screen.getByRole('checkbox')).not.toHaveStyleRule('left', '0');
    });
  });
});

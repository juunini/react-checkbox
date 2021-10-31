import { render, screen, fireEvent } from '@testing-library/react';

import Switch from './Switch';

function renderSwitch(args: any) {
  return render((
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Switch checked={false} onChange={args.onChange || jest.fn()} {...args} />
  ));
}

describe('Switch component is', () => {
  context('When click Switch', () => {
    const onChange = jest.fn();

    it('Should be calls onChange', () => {
      renderSwitch({ onChange });

      fireEvent.click(screen.getByRole('checkbox'));

      expect(onChange).toBeCalled();
    });
  });

  context('When given type is "radio"', () => {
    const givenType: 'radio' = 'radio';

    it('Should be render "radio" type input', () => {
      renderSwitch({ type: givenType });

      expect(screen.getByRole('radio')).toBeInTheDocument();
    });
  });

  context('When given location is "before"', () => {
    const givenLocation: 'before' = 'before';

    it('Should be "left" is 0 and no "right"', () => {
      renderSwitch({ location: givenLocation });

      expect(screen.getByRole('checkbox')).not.toHaveStyleRule('right', '0');
      expect(screen.getByRole('checkbox')).toHaveStyleRule('left', '0');
    });
  });

  context('When given location is "after"', () => {
    const givenLocation: 'after' = 'after';

    it('Should be no "left" and "right" is 0', () => {
      renderSwitch({ location: givenLocation });

      expect(screen.getByRole('checkbox')).toHaveStyleRule('right', '0');
      expect(screen.getByRole('checkbox')).not.toHaveStyleRule('left', '0');
    });
  });
});

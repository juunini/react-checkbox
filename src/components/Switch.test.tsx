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

  context('When given type is "checkbox"', () => {
    it('Should be render "checkbox" type input', () => {
      renderSwitch({ type: 'checkbox' });

      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('Should be onChange receive checked status', () => {
      const givenChecked: boolean = false;
      const onChange = jest.fn((checked: boolean) => expect(checked).toBe(!givenChecked));

      renderSwitch({ type: 'checkbox', onChange, checked: givenChecked });

      fireEvent.click(screen.getByRole('checkbox'));
    });
  });

  context('When given type is "radio"', () => {
    it('Should be render "radio" type input', () => {
      renderSwitch({ type: 'radio' });

      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('Should be onChange receive value', () => {
      const givenValue: string = 'value';
      const onChange = jest.fn((value: string) => expect(value).toBe(givenValue));

      renderSwitch({ type: 'radio', onChange, value: givenValue });

      fireEvent.click(screen.getByRole('radio'));
    });
  });

  context('When given location is "before"', () => {
    it('Should checkbox front of children', () => {
      const { container } = render((
        <Switch checked={false} onChange={jest.fn()} location="before">
          <span>aaa</span>
        </Switch>
      ));

      expect(container.querySelector('div')?.nextSibling?.nodeName).toBe('SPAN');
    });
  });

  context('When given location is "after"', () => {
    it('Should children front of checkbox', () => {
      const { container } = render((
        <Switch checked={false} onChange={jest.fn()} location="after">
          <span>aaa</span>
        </Switch>
      ));

      expect(container.querySelector('div')?.previousSibling?.nodeName).toBe('SPAN');
    });
  });
});

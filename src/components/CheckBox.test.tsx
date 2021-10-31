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

  context('When given type is "checkbox"', () => {
    it('Should be render "checkbox" type input', () => {
      renderCheckBox({ type: 'checkbox' });

      expect(screen.getByRole('checkbox')).toBeInTheDocument();
    });

    it('Should be onChange receive checked status', () => {
      const givenChecked: boolean = false;
      const onChange = jest.fn((checked: boolean) => expect(checked).toBe(!givenChecked));

      renderCheckBox({ type: 'checkbox', onChange, checked: givenChecked });

      fireEvent.click(screen.getByRole('checkbox'));
    });
  });

  context('When given type is "radio"', () => {
    it('Should be render "radio" type input', () => {
      renderCheckBox({ type: 'radio' });

      expect(screen.getByRole('radio')).toBeInTheDocument();
    });

    it('Should be onChange receive value', () => {
      const givenValue: string = 'value';
      const onChange = jest.fn((value: string) => expect(value).toBe(givenValue));

      renderCheckBox({ type: 'radio', onChange, value: givenValue });

      fireEvent.click(screen.getByRole('radio'));
    });
  });

  context('When given location is "before"', () => {
    it('Should checkbox front of children', () => {
      const { container } = render((
        <CheckBox checked={false} onChange={jest.fn()} location="before">
          <span>aaa</span>
        </CheckBox>
      ));

      expect(container.querySelector('div')?.nextSibling?.nodeName).toBe('SPAN');
    });
  });

  context('When given location is "after"', () => {
    it('Should children front of checkbox', () => {
      const { container } = render((
        <CheckBox checked={false} onChange={jest.fn()} location="after">
          <span>aaa</span>
        </CheckBox>
      ));

      expect(container.querySelector('div')?.previousSibling?.nodeName).toBe('SPAN');
    });
  });
});

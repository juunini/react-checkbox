import type { CheckBoxLocation, CheckBoxType } from './CheckBox.types';
import randomID from '../utils/randomID';
import Label from './Wrapper';
import Input from './Input';
import FakeCheckBox from './FakeCheckBox';

export interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  type?: CheckBoxType;
  id?: string;
  name?: string;
  location?: CheckBoxLocation;
  children?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  divStyle?: React.CSSProperties;
  checkboxDefaultStyle?: React.CSSProperties;
  checkboxCheckedStyle?: React.CSSProperties;
}

export default function CheckBox({
  checked,
  onChange,
  type = 'checkbox',
  id = randomID(),
  name,
  location,
  children,
  labelStyle,
  divStyle,
  checkboxDefaultStyle,
  checkboxCheckedStyle,
}: Props): JSX.Element {
  return (
    <Label
      htmlFor={id}
      labelStyle={labelStyle}
    >
      <Input
        type={type}
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <FakeCheckBox
        location={location}
        divStyle={divStyle}
        checkboxDefaultStyle={checkboxDefaultStyle}
        checkboxCheckedStyle={checkboxCheckedStyle}
      >
        {children}
      </FakeCheckBox>
    </Label>
  );
}

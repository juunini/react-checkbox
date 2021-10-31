import type { CheckBoxLocation, CheckBoxType } from './CheckBox.types';
import randomID from '../utils/randomID';
import Label from './Label';
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
  checkboxStyle?: React.CSSProperties;
  checkboxCheckedStyle?: React.CSSProperties;
}

export default function CheckBox({
  checked,
  onChange,
  type = 'checkbox',
  id = randomID(),
  name,
  location = 'before',
  children,
  labelStyle,
  checkboxStyle,
  checkboxCheckedStyle,
}: Props): JSX.Element {
  return (
    <Label
      htmlFor={id}
      labelStyle={labelStyle}
    >
      <Input
        type={type}
        location={location}
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <FakeCheckBox
        type={type}
        location={location}
        checkboxStyle={checkboxStyle}
        checkboxCheckedStyle={checkboxCheckedStyle}
      />
      {children}
    </Label>
  );
}

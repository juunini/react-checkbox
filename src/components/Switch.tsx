import type { CheckBoxLocation, CheckBoxType } from './CheckBox.types';
import randomID from '../utils/randomID';
import Label from './Label';
import Input from './Input';
import FakeSwitch from './FakeSwitch';

export interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  type?: CheckBoxType;
  id?: string;
  name?: string;
  location?: CheckBoxLocation;
  children?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  switchStyle?: React.CSSProperties;
  switchInnerStyle?: React.CSSProperties;
  switchInnerCheckedStyle?: React.CSSProperties;
}

export default function Switch({
  checked,
  onChange,
  type = 'checkbox',
  id = randomID(),
  name,
  location = 'before',
  children,
  labelStyle,
  switchStyle,
  switchInnerStyle,
  switchInnerCheckedStyle,
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
        checkboxStyle={switchStyle}
      />
      { location === 'after' && children }
      <FakeSwitch
        switchStyle={switchStyle}
        switchInnerStyle={switchInnerStyle}
        switchInnerCheckedStyle={switchInnerCheckedStyle}
      />
      { location === 'before' && children }
    </Label>
  );
}

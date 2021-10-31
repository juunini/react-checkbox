import type { CheckBoxLocation, CheckBoxType } from './CheckBox.types';
import randomID from '../utils/randomID';
import Label from './Label';
import Input from './Input';
import FakeCheckBox from './FakeCheckBox';
import {
  CHECKBOX_STYLE,
  CHECKBOX_CHECKED_STYLE,
  CHECKBOX_INNER_STYLE,
  CHECKBOX_INNER_CHECKED_STYLE,
} from './CheckBox.styles';

export interface Props {
  checked: boolean;
  value?: string;
  onChange: (value: string | boolean) => void;
  type?: CheckBoxType;
  id?: string;
  name?: string;
  location?: CheckBoxLocation;
  children?: React.ReactNode;
  labelStyle?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
  checkboxCheckedStyle?: React.CSSProperties;
  checkboxInnerStyle?: React.CSSProperties;
  checkboxInnerCheckedStyle?: React.CSSProperties;
}

export default function CheckBox({
  checked,
  value,
  onChange,
  type = 'checkbox',
  id = randomID(),
  name,
  location = 'before',
  children,
  labelStyle,
  checkboxStyle,
  checkboxCheckedStyle,
  checkboxInnerStyle,
  checkboxInnerCheckedStyle,
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
        value={value}
        checked={checked}
        onChange={(e) => onChange(type === 'checkbox' ? e.target.checked : e.target.value)}
        checkboxStyle={{
          ...CHECKBOX_STYLE,
          borderRadius: type === 'radio' ? '50%' : 0,
          ...checkboxStyle,
        }}
      />
      { location === 'after' && children }
      <FakeCheckBox
        checkboxStyle={{
          ...CHECKBOX_STYLE,
          borderRadius: type === 'radio' ? '50%' : 0,
          ...checkboxStyle,
        }}
        checkboxCheckedStyle={{
          ...CHECKBOX_CHECKED_STYLE,
          ...checkboxCheckedStyle,
        }}
        checkboxInnerStyle={{
          ...CHECKBOX_INNER_STYLE,
          borderRadius: type === 'radio' ? '50%' : 0,
          ...checkboxInnerStyle,
        }}
        checkboxInnerCheckedStyle={{
          ...CHECKBOX_INNER_CHECKED_STYLE,
          ...checkboxInnerCheckedStyle,
        }}
      />
      { location === 'before' && children }
    </Label>
  );
}

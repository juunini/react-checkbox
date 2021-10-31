import type { CheckBoxLocation, CheckBoxType } from './CheckBox.types';
import randomID from '../utils/randomID';
import Label from './Label';
import Input from './Input';
import FakeSwitch from './FakeSwitch';
import {
  SWITCH_STYLE,
  SWITCH_CHECKED_STYLE,
  SWITCH_INNER_STYLE,
  SWITCH_INNER_CHECKED_STYLE,
} from './Switch.styles';

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
  switchStyle?: React.CSSProperties;
  switchCheckedStyle?: React.CSSProperties;
  switchInnerStyle?: React.CSSProperties;
  switchInnerCheckedStyle?: React.CSSProperties;
}

export default function Switch({
  checked,
  value,
  onChange,
  type = 'checkbox',
  id = randomID(),
  name,
  location = 'before',
  children,
  labelStyle,
  switchStyle,
  switchCheckedStyle,
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
        value={value}
        checked={checked}
        onChange={(e) => onChange(type === 'checkbox' ? e.target.checked : e.target.value)}
        checkboxStyle={{ ...SWITCH_STYLE, ...switchStyle }}
      />
      { location === 'after' && children }
      <FakeSwitch
        switchStyle={{ ...SWITCH_STYLE, ...switchStyle }}
        switchCheckedStyle={{ ...SWITCH_CHECKED_STYLE, ...switchCheckedStyle }}
        switchInnerStyle={{ ...SWITCH_INNER_STYLE, ...switchInnerStyle }}
        switchInnerCheckedStyle={{ ...SWITCH_INNER_CHECKED_STYLE, ...switchInnerCheckedStyle }}
      />
      { location === 'before' && children }
    </Label>
  );
}

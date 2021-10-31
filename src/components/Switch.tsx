import type { CheckBoxLocation, CheckBoxType } from './CheckBox.types';
import randomID from '../utils/randomID';
import Label from './Label';
import Input from './Input';
import FakeSwitch from './FakeSwitch';
import {
  SWITCH,
  SWITCH_CHECKED,
  SWITCH_INNER_STYLE,
  SWITCH_INNER_CHECKED_STYLE,
} from './Switch.styles';

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
  switchCheckedStyle?: React.CSSProperties;
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
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        checkboxStyle={{ ...SWITCH, ...switchStyle }}
      />
      { location === 'after' && children }
      <FakeSwitch
        switchStyle={{ ...SWITCH, ...switchStyle }}
        switchCheckedStyle={{ ...SWITCH_CHECKED, ...switchCheckedStyle }}
        switchInnerStyle={{ ...SWITCH_INNER_STYLE, ...switchInnerStyle }}
        switchInnerCheckedStyle={{ ...SWITCH_INNER_CHECKED_STYLE, ...switchInnerCheckedStyle }}
      />
      { location === 'before' && children }
    </Label>
  );
}

import styled from '@emotion/styled';

import type { CheckBoxLocation, CheckBoxType } from './CheckBox.types';

const DIV_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  padding: 0,
};
const CHECKBOX_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  content: '""',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1rem',
  height: '1rem',
  margin: 0,
  padding: 0,
  fontSize: '1rem',
  backgroundColor: 'white',
  border: '3px solid white',
  outline: '1px inset black',
};
const CHECKBOX_CHECKED_STYLE: React.CSSProperties = {
  backgroundColor: 'black',
};

export interface Props {
  type: CheckBoxType;
  location: CheckBoxLocation;
  divStyle?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
  checkboxCheckedStyle?: React.CSSProperties;
}

const FakeCheckBox = styled.div(({
  type,
  location,
  divStyle,
  checkboxStyle,
  checkboxCheckedStyle,
}: Props) => ({
  ...DIV_STYLE,
  ...divStyle,

  [`&::${location}`]: {
    ...CHECKBOX_STYLE,
    borderRadius: type === 'radio' ? '50%' : 0,
    ...checkboxStyle,
  },

  [`input:checked ~ &::${location}`]: {
    ...CHECKBOX_CHECKED_STYLE,
    ...checkboxCheckedStyle,
  },
}));

export default FakeCheckBox;

import styled from '@emotion/styled';

import type { CheckBoxType } from './CheckBox.types';

const CHECKBOX_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  padding: 0,
};
const CHECKBOX_CHECKED_STYLE: React.CSSProperties = {};
const CHECKBOX_INNER_STYLE: React.CSSProperties = {
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
const CHECKBOX_INNER_CHECKED_STYLE: React.CSSProperties = {
  backgroundColor: 'black',
};

export interface Props {
  type: CheckBoxType;
  checkboxStyle?: React.CSSProperties;
  checkboxCheckedStyle?: React.CSSProperties;
  checkboxInnerStyle?: React.CSSProperties;
  checkboxInnerCheckedStyle?: React.CSSProperties;
}

const FakeCheckBox = styled.div(({
  type,
  checkboxStyle,
  checkboxCheckedStyle,
  checkboxInnerStyle,
  checkboxInnerCheckedStyle,
}: Props) => ({
  ...CHECKBOX_STYLE,
  ...checkboxStyle,

  'input:checked ~ &': {
    ...CHECKBOX_CHECKED_STYLE,
    ...checkboxCheckedStyle,
  },

  '&::before': {
    ...CHECKBOX_INNER_STYLE,
    borderRadius: type === 'radio' ? '50%' : 0,
    ...checkboxInnerStyle,
  },

  'input:checked ~ &::before': {
    ...CHECKBOX_INNER_CHECKED_STYLE,
    ...checkboxInnerCheckedStyle,
  },
}));

export default FakeCheckBox;

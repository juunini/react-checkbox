import styled from '@emotion/styled';

import type { CheckBoxLocation } from './CheckBox.types';

const SWITCH_CASE: React.CSSProperties = {
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '55px',
  height: '30px',
  margin: 0,
  padding: 0,
  borderRadius: '20px',
  backgroundColor: '#CCCCCC',
  boxShadow: 'inset 1px 5px 1px #999999',
  transition: '0.5s',
};
const SWITCH_CASE_CHECKED: React.CSSProperties = {
  backgroundColor: '#F2D522',
  boxShadow: 'inset 1px 5px 1px #E3AE56',
};
const CHECKBOX_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  content: '""',
  position: 'absolute',
  left: '4px',
  bottom: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '22px',
  height: '22px',
  margin: 0,
  padding: 0,
  backgroundColor: 'white',
  borderRadius: '50%',
  transition: '0.5s',
};
const CHECKBOX_CHECKED_STYLE: React.CSSProperties = {
  transform: 'translateX(26px)',
};

export interface Props {
  location: CheckBoxLocation;
  divStyle?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
  checkboxCheckedStyle?: React.CSSProperties;
}

const FakeSwitch = styled.div(({
  location,
  divStyle,
  checkboxStyle,
  checkboxCheckedStyle,
}: Props) => ({
  ...SWITCH_CASE,
  ...divStyle,

  'input:checked ~ &': {
    ...SWITCH_CASE_CHECKED,
  },

  [`&::${location}`]: {
    ...CHECKBOX_STYLE,
    ...checkboxStyle,
  },

  [`input:checked ~ &::${location}`]: {
    ...CHECKBOX_CHECKED_STYLE,
    ...checkboxCheckedStyle,
  },
}));

export default FakeSwitch;

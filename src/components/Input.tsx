import styled from '@emotion/styled';

import type { CheckBoxLocation } from './CheckBox.types';

export interface Props {
  location: CheckBoxLocation;
  checkboxStyle: React.CSSProperties;
}

const Input = styled.input(({
  location,
  checkboxStyle,
}: Props) => ({
  boxSizing: 'border-box',
  appearance: 'none',
  position: 'absolute',
  zIndex: -1,
  top: 0,
  [location === 'before' ? 'left' : 'right']: 0,
  width: checkboxStyle.width,
  height: checkboxStyle.height,
  margin: 0,
  padding: 0,
  borderRadius: checkboxStyle.borderRadius,
}));

export default Input;

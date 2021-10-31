import styled from '@emotion/styled';

import type { CheckBoxLocation, CheckBoxType } from './CheckBox.types';

export interface Props {
  location: CheckBoxLocation;
  type: CheckBoxType;
  checkboxStyle?: React.CSSProperties;
}

const Input = styled.input(({
  location,
  type,
  checkboxStyle,
}: Props) => ({
  boxSizing: 'border-box',
  appearance: 'none',
  position: 'absolute',
  zIndex: -1,
  top: 2,
  [location === 'before' ? 'left' : 'right']: 0,
  width: checkboxStyle?.width || '1rem',
  height: checkboxStyle?.height || '1rem',
  margin: 0,
  padding: 0,
  borderRadius: checkboxStyle?.borderRadius || type === 'radio' ? '50%' : 0,
}));

export default Input;

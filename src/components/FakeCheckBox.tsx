import styled from '@emotion/styled';

import type { CheckBoxLocation } from './CheckBox.types';

export interface Props {
  location?: CheckBoxLocation;
  divStyle?: React.CSSProperties;
  checkboxDefaultStyle?: React.CSSProperties;
  checkboxCheckedStyle?: React.CSSProperties;
}

const FakeCheckBox = styled.div(({
  location = 'before',
  divStyle,
  checkboxDefaultStyle,
  checkboxCheckedStyle,
}: Props) => ({
  ...divStyle,

  [`&::${location}`]: {
    ...checkboxDefaultStyle,
  },

  [`input:checked ~ &::${location}`]: {
    ...checkboxCheckedStyle,
  },
}));

export default FakeCheckBox;

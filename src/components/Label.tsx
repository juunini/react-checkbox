import styled from '@emotion/styled';

import type Props from './Label.interfaces';

const Label = styled.label(({
  marginRight,
  marginLeft,
  fontSize = 'inherit',
}: Props) => ({
  boxSizing: 'border-box',
  position: 'relative',
  display: 'inline-flex',
  marginRight,
  marginLeft,
  fontSize,
  verticalAlign: 'top',
}));

export default Label;

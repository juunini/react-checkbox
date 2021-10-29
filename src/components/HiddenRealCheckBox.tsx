import styled from '@emotion/styled';

import type Props from './HiddenRealCheckBox.interfaces';

const HiddenRealCheckBox = styled.input(({
  width = '1rem',
  height = '1rem',
  checkboxPosition = 'before',
}: Props) => ({
  boxSizing: 'border-box',
  position: 'absolute',
  top: 0,
  left: checkboxPosition === 'before' ? 0 : 'none',
  right: checkboxPosition === 'after' ? 0 : 'none',
  zIndex: -1,
  width,
  height,
  border: 'none',
  background: 'none',
  appearance: 'none',
}));
HiddenRealCheckBox.defaultProps = {
  type: 'checkbox',
};

export default HiddenRealCheckBox;

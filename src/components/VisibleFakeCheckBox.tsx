import styled from '@emotion/styled';

import type Props from './VisibleFakeCheckBox.interfaces';

const VisibleFakeCheckBox = styled.span(({
  width = '1rem',
  height = '1rem',
  checkboxMarginRight,
  checkboxMarginLeft,
  borderWidth = '1px',
  borderStyle = 'solid',
  borderColor = 'black',
  borderRadius,
  backgroundColor,
  checkboxPosition = 'before',
  checkedContent = '✔️',
  checkedBackgroundColor,
  checkedImage = null,
  checkedImageSize = '100% 100%',
}: Props) => ({
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  fontSize: 'inherit',

  [`&::${checkboxPosition}`]: {
    boxSizing: 'border-box',
    content: '""',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height,
    marginRight: checkboxMarginRight,
    marginLeft: checkboxMarginLeft,
    fontSize: 'inherit',
    borderWidth,
    borderStyle,
    borderColor,
    borderRadius,
    backgroundColor,
  },

  [`input:checked ~ &::${checkboxPosition}`]: {
    content: `"${checkedContent}"`,
    backgroundColor: checkedBackgroundColor,
    backgroundImage: checkedImage ? `url("${checkedImage}")` : undefined,
    backgroundSize: checkedImageSize,
  },
}));

export default VisibleFakeCheckBox;

import styled from '@emotion/styled';

export interface Props {
  checkboxStyle?: React.CSSProperties;
  checkboxCheckedStyle?: React.CSSProperties;
  checkboxInnerStyle?: React.CSSProperties;
  checkboxInnerCheckedStyle?: React.CSSProperties;
}

const FakeCheckBox = styled.div(({
  checkboxStyle,
  checkboxCheckedStyle,
  checkboxInnerStyle,
  checkboxInnerCheckedStyle,
}: Props) => ({
  ...checkboxStyle,

  'input:checked ~ &': {
    ...checkboxCheckedStyle,
  },

  '&::before': {
    ...checkboxInnerStyle,
  },

  'input:checked ~ &::before': {
    ...checkboxInnerCheckedStyle,
  },
}));

export default FakeCheckBox;

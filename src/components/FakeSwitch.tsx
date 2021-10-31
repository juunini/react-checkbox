import styled from '@emotion/styled';

export interface Props {
  switchStyle?: React.CSSProperties;
  switchCheckedStyle?: React.CSSProperties;
  switchInnerStyle?: React.CSSProperties;
  switchInnerCheckedStyle?: React.CSSProperties;
}

const FakeSwitch = styled.div(({
  switchStyle,
  switchCheckedStyle,
  switchInnerStyle,
  switchInnerCheckedStyle,
}: Props) => ({
  ...switchStyle,

  'input:checked ~ &': {
    ...switchCheckedStyle,
  },

  '&::before': {
    ...switchInnerStyle,
  },

  'input:checked ~ &::before': {
    ...switchInnerCheckedStyle,
  },
}));

export default FakeSwitch;

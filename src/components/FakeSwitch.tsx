import styled from '@emotion/styled';

const SWITCH: React.CSSProperties = {
  boxSizing: 'border-box',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '3.4rem',
  height: '1.8rem',
  margin: 0,
  padding: 0,
  borderRadius: '1.2rem',
  backgroundColor: '#CCCCCC',
  boxShadow: 'inset 1px 5px 1px #999999',
  transition: '0.5s',
};
const SWITCH_CHECKED: React.CSSProperties = {
  backgroundColor: '#F2D522',
  boxShadow: 'inset 1px 5px 1px #E3AE56',
};
const SWITCH_INNER_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  content: '""',
  position: 'absolute',
  left: '0.2rem',
  bottom: '0.2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1.5rem',
  height: '1.5rem',
  margin: 0,
  padding: 0,
  backgroundColor: 'white',
  borderRadius: '50%',
  transition: '0.5s',
};
const SWITCH_INNER_CHECKED_STYLE: React.CSSProperties = {
  transform: 'translateX(1.5rem)',
};

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
  ...SWITCH,
  ...switchStyle,

  'input:checked ~ &': {
    ...SWITCH_CHECKED,
    ...switchCheckedStyle,
  },

  '&::before': {
    ...SWITCH_INNER_STYLE,
    ...switchInnerStyle,
  },

  'input:checked ~ &::before': {
    ...SWITCH_INNER_CHECKED_STYLE,
    ...switchInnerCheckedStyle,
  },
}));

export default FakeSwitch;

import styled from '@emotion/styled';

const SWITCH: React.CSSProperties = {
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
const SWITCH_CHECKED: React.CSSProperties = {
  backgroundColor: '#F2D522',
  boxShadow: 'inset 1px 5px 1px #E3AE56',
};
const SWITCH_INNER_STYLE: React.CSSProperties = {
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
const SWITCH_INNER_CHECKED_STYLE: React.CSSProperties = {
  transform: 'translateX(26px)',
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

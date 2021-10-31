import styled from '@emotion/styled';

export const LABEL_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  position: 'relative',
  display: 'inline-flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  padding: 0,
  verticalAlign: 'top',
};

interface Props {
  labelStyle?: React.CSSProperties;
}

const Label = styled.label(({
  labelStyle,
}: Props) => ({
  ...LABEL_STYLE,
  ...labelStyle,
}));

export default Label;

import styled from '@emotion/styled';

interface Props {
  labelStyle?: React.CSSProperties;
}

const Label = styled.label(({
  labelStyle,
}: Props) => ({
  ...labelStyle,
}));

export default Label;

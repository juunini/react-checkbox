import styled from '@emotion/styled';

export interface Props {
  checkboxDefaultStyle?: React.CSSProperties;
}

const Input = styled.input(({
  checkboxDefaultStyle,
}: Props) => ({
  width: checkboxDefaultStyle?.width,
  height: checkboxDefaultStyle?.height,
}));

export default Input;

import type { CheckboxPosition } from './VisibleFakeCheckBox.types';

export default interface Props {
  width?: string;
  height?: string;
  checkboxMarginRight?: string;
  checkboxMarginLeft?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  backgroundColor?: string;
  checkboxPosition?: CheckboxPosition;
  checkedContent?: string;
  checkedBackgroundColor?: string;
  checkedImage?: string | null;
  checkedImageSize?: string;
}

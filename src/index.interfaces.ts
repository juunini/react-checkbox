import type { CheckboxPosition } from './components/VisibleFakeCheckbox.types';
import type { Type } from './components/HiddenRealCheckBox.types';

export default interface Props {
  // Label
  marginRight?: string;
  marginLeft?: string;
  fontSize?: string;
  // HiddenRealCheckbox
  id?: string;
  name?: string;
  children?: React.ReactNode;
  type?: Type;
  checked: boolean;
  onChange: (checked: boolean) => void;
  // VisibleFakeCheckbox
  width?: string;
  height?: string;
  checkboxMarginRight?: string;
  checkboxMarginLeft?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
  checkboxPosition?: CheckboxPosition;
  checkedContent?: string;
  checkedBackgroundColor?: string;
  checkedImage?: string | null;
  checkedImageSize?: string;
}

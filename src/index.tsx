import type Props from './index.interfaces';
import Label from './components/Label';
import HiddenRealCheckBox from './components/HiddenRealCheckBox';
import VisibleFakeCheckBox from './components/VisibleFakeCheckBox';
import randomID from './utils/randomID';

export default function CheckBox({
  // Label
  marginRight,
  marginLeft,
  fontSize,
  // HiddenRealCheckbox
  id = randomID(),
  name,
  children,
  type = 'checkbox',
  checked,
  onChange,
  // VisibleFakeCheckbox
  width,
  height,
  checkboxMarginRight,
  checkboxMarginLeft,
  borderWidth,
  borderStyle,
  borderColor,
  borderRadius,
  checkboxPosition,
  checkedContent,
  checkedBackgroundColor,
  checkedImage,
  checkedImageSize,
}: Props): JSX.Element {
  return (
    <Label
      htmlFor={id}
      marginRight={marginRight}
      marginLeft={marginLeft}
      fontSize={fontSize}
    >
      <HiddenRealCheckBox
        id={id}
        name={name}
        type={type}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        width={width}
        height={height}
      />
      <VisibleFakeCheckBox
        width={width}
        height={height}
        checkboxMarginRight={checkboxMarginRight}
        checkboxMarginLeft={checkboxMarginLeft}
        borderWidth={borderWidth}
        borderStyle={borderStyle}
        borderColor={borderColor}
        borderRadius={borderRadius}
        checkboxPosition={checkboxPosition}
        checkedContent={checkedContent}
        checkedBackgroundColor={checkedBackgroundColor}
        checkedImage={checkedImage}
        checkedImageSize={checkedImageSize}
      >
        {children}
      </VisibleFakeCheckBox>
    </Label>
  );
}

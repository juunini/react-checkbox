# react-checkbox

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-CC6699?style=for-the-badge&logo=emotion&logoColor=white)
![Parcel](https://img.shields.io/badge/📦_Parcel-334155?style=for-the-badge&logo=emotion&logoColor=white)

## Usage

When you use basic appearance of checkbox or radio

```tsx
import { useState } from 'react';
import { CheckBox } from 'react-checkbox';

function App(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <CheckBox
      checked={checked}
      onChange={setChecked}
    >
      label text
    </CheckBox>
  );
}
```

When you use switch appearance of checkbox or radio

```tsx
import { useState } from 'react';
import { Switch } from 'react-checkbox';

function App(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <Switch
      checked={checked}
      onChange={setChecked}
    >
      label text
    </Switch>
  );
}
```

## Properties

|name|type|default|
|:-|:-|:-|
|*checked|boolean||
|*onChange|(checked: boolean) => void||
|type|'checkbox' \| 'radio'|'checkbox'|
|id|string|[randomID](./src/utils/randomID.ts)|
|name|string|undefined|
|location|'before' \| 'after'|'before'|
|[labelStyle](#labelstyle-default-properties)|React.CSSProperties||
|[checkboxStyle](#checkboxstyle-default-properties)|React.CSSProperties||
|[checkboxInnerStyle](#checkboxinnerstyle-default-properties)|React.CSSProperties||
|[checkboxInnerCheckedStyle](#checkboxinnercheckedstyle-default-properties)|React.CSSProperties||

## labelStyle default properties

```html
<label>
  <input />
  { location === 'after' && children }
  <div />
  { location === 'before' && children }
</label>
```

in label style.

|name|default|
|:-|:-|
|boxSizing|border-box|
|position|relative|
|display|inline-flex|
|flexDirection|row|
|justifyContent|center|
|alignItems|center|
|margin|0|
|padding|0|
|verticalAlign|top|

## checkboxStyle default properties

`input ~ div` style.

|name|default|
|:-|:-|
|boxSizing|border-box|
|display|flex|
|flexDirection|row|
|justifyContent|center|
|alignItems|center|
|margin|0|
|padding|0|

## checkboxInnerStyle default properties

This using in `input ~ div::before` pseudo class style.

|name|default|
|:-|:-|
|boxSizing|border-box|
|content|""|
|display|flex|
|justifyContent|center|
|alignItems|center|
|width|1rem|
|height|1rem|
|margin|0|
|padding|0|
|fontSize|1rem|
|backgroundColor|white|
|border|3px solid white|
|borderRadius|type === radio ? 50% : 0|
|outline|1px inset black|

## checkboxInnerCheckedStyle default properties

This using in `input:checked ~ div::before` pseudo class style.

|name|default|
|:-|:-|
|backgroundColor|black|

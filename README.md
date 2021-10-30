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
|[wrapperStyle](#wrapperstyle-default-properties)|React.CSSProperties||
|[checkboxWrapperStyle](#checkboxwrapperstyle-default-properties)|React.CSSProperties||
|[checkboxDefaultStyle](#checkboxdefaultstyle-default-properties)|React.CSSProperties||
|[checkboxCheckedStyle](#checkboxcheckedstyle-default-properties)|React.CSSProperties||

## wrapperStyle default properties

```html
<label>
  <input />
  <div>{children}</div>
</label>
```

in label style.

|name|default|
|:-|:-|
|display|inline-flex|
|flexDirection|row|
|justifyContent|center|
|alignItems|center|

## checkboxWrapperStyle default properties

`<div> ::before {children} ::after </div>` div style.

|name|default|
|:-|:-|
|display|flex|
|flexDirection|row|
|justifyContent|center|
|alignItems|center|

## checkboxDefaultStyle default properties

This using in `input ~ div::before` or `input ~ div::after` pseudo class style.

|name|default|
|:-|:-|
|content|""|
|display|flex|
|justifyContent|center|
|alignItems|center|
|width|1rem|
|height|1rem|
|fontSize|1rem|
|border|1px solid black|

## checkboxCheckedStyle default properties

This using in `input:checked ~ div::before` or `input:checked ~ div::after` pseudo class style.

|name|default|
|:-|:-|
|content|✔️|

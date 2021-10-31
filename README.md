# react-checkbox

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Emotion](https://img.shields.io/badge/Emotion-CC6699?style=for-the-badge&logo=emotion&logoColor=white)
![Parcel](https://img.shields.io/badge/📦_Parcel-334155?style=for-the-badge&logo=emotion&logoColor=white)

## Caution

This package is test version now.

## Usage

Using checkbox

```tsx
import { useState } from 'react';
import { CheckBox/* or Switch */ } from '@juunini/react-checkbox';

function App(): JSX.Element {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <CheckBox
      checked={checked}
      onChange={setChecked}
    >
      checkbox
    </CheckBox>
  );
}
```

Using radio

```tsx
import { useState } from 'react';
import { CheckBox/* or Switch */ } from '@juunini/react-checkbox';

function App(): JSX.Element {
  const [value, setValue] = useState<string>('');

  return (
    <>
      <CheckBox
        type="radio"
        value="1"
        checked={value === '1'}
        onChange={setValue}
      >
        radio1
      </CheckBox>
      <CheckBox
        type="radio"
        value="2"
        checked={value === '2'}
        onChange={setValue}
      >
        radio2
      </CheckBox>
    </>
  );
}
```

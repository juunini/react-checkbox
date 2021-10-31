import randomID from '../utils/randomID';

export type CheckBoxType = 'checkbox' | 'radio';

export interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  type?: CheckBoxType;
  children?: React.ReactNode;
}

export default function CheckBox({
  checked,
  onChange,
  type = 'checkbox',
  children,
}: Props): JSX.Element {
  const id = randomID();

  return (
    <label htmlFor={id}>
      <input
        type={type}
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />

      <div>
        {children}
      </div>
    </label>
  );
}

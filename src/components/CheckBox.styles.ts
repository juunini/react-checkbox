export const CHECKBOX_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 0,
  padding: 0,
};

export const CHECKBOX_CHECKED_STYLE: React.CSSProperties = {};

export const CHECKBOX_INNER_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  content: '""',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1rem',
  height: '1rem',
  margin: 0,
  padding: 0,
  fontSize: '1rem',
  backgroundColor: 'white',
  border: '3px solid white',
  outline: '1px inset black',
};

export const CHECKBOX_INNER_CHECKED_STYLE: React.CSSProperties = {
  backgroundColor: 'black',
};

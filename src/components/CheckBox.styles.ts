export const CHECKBOX_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '1.2rem',
  height: '1.2rem',
  margin: 0,
  padding: 0,
  border: '1px solid black',
};

export const CHECKBOX_CHECKED_STYLE: React.CSSProperties = {};

export const CHECKBOX_INNER_STYLE: React.CSSProperties = {
  boxSizing: 'border-box',
  content: '""',
  display: 'block',
  width: '0.6rem',
  height: '0.6rem',
  maxWidth: 0,
  maxHeight: 0,
  margin: 0,
  padding: 0,
  backgroundColor: 'black',
  transition: '0.2s',
};

export const CHECKBOX_INNER_CHECKED_STYLE: React.CSSProperties = {
  maxWidth: '0.6rem',
  maxHeight: '0.6rem',
};

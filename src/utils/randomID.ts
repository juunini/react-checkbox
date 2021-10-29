const randomID = (): string => Math
  .random()
  .toString(36)
  .substr(2, 11);

export default randomID;

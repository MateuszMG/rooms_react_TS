export const firstLetterToUpperCase = (text: string) =>
  text.substring(0, 1).toUpperCase() + text.substring(1);

export const separateStringOnCapitalCase = (text: string) =>
  firstLetterToUpperCase(text.replace(/[A-Z]/g, (l) => ` ${l.toLowerCase()}`));

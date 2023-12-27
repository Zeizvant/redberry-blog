export const validateEmail = (email) => {
  return email.match(/^[A-Za-z0-9._%+-]+@redberry\.ge$/);
};

export const validateMinFour = (text) => {
  return text.length > 3;
};

export const validateGeo = (text) => {
  return text.match(/^[ა-ჰ\s]*$/);
};

export const validateMinTwoWords = (text) => {
  const matches = text.match(/[\w\ა-ჰ]+/g);
  return matches && matches.length >= 2;
};

export const validateMinTwo = (text) => {
  return text.length > 1;
};

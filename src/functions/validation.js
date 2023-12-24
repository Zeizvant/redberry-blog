export const validateEmail = (email) => {
  return email.match(/^[A-Za-z0-9._%+-]+@redberry\.ge$/);
};

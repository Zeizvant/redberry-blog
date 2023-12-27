import {
  validateEmail,
  validateGeo,
  validateMinFour,
  validateMinTwo,
  validateMinTwoWords,
} from 'functions/validation';

export const allValid = (data) => {
  return data.every((item) => item == true);
};

export const validateUploadEmail = (email, emailErrorsObject) => {
  if (
    email === '' ||
    email === null ||
    (email.length > 0 && validateEmail(email))
  ) {
    emailErrorsObject['requiredOrGeo'] = false;
  } else {
    emailErrorsObject['requiredOrGeo'] = true;
  }
};

export const validateCategories = (categories, categoriesErrorsObject) => {
  if (categories.length == 0) {
    categoriesErrorsObject['required'] = true;
  } else {
    categoriesErrorsObject['required'] = false;
  }
  return categoriesErrorsObject;
};

export const validateDate = (date, dateErrorsObject) => {
  if (!date === '') {
    dateErrorsObject['required'] = true;
  } else {
    dateErrorsObject['required'] = false;
  }
  return dateErrorsObject;
};

export const validatePhoto = (photo, photoErrorsObject) => {
  if (!photo === '') {
    photoErrorsObject['required'] = true;
  } else {
    photoErrorsObject['required'] = false;
  }
  return photoErrorsObject;
};

export const validateHeader = (header, headerErrorsObject) => {
  if (!validateMinTwo(header)) {
    headerErrorsObject['minTwo'] = true;
  } else {
    headerErrorsObject['minTwo'] = false;
  }
  return headerErrorsObject;
};

export const validateDescription = (description, descriptionErrorsObject) => {
  if (!validateMinTwo(description)) {
    descriptionErrorsObject['minTwo'] = true;
  } else {
    descriptionErrorsObject['minTwo'] = false;
  }
  return descriptionErrorsObject;
};

export const validateAuthor = (author, authorErrorsObject) => {
  if (!validateMinFour(author)) {
    authorErrorsObject['minFour'] = true;
  } else {
    authorErrorsObject['minFour'] = false;
  }

  if (!validateMinTwoWords(author)) {
    authorErrorsObject['minTwoWords'] = true;
  } else {
    authorErrorsObject['minTwoWords'] = false;
  }

  if (!validateGeo(author)) {
    authorErrorsObject['onlyGeo'] = true;
  } else {
    authorErrorsObject['onlyGeo'] = false;
  }

  if (author === '') {
    authorErrorsObject['required'] = true;
  } else {
    authorErrorsObject['required'] = false;
  }

  return authorErrorsObject;
};

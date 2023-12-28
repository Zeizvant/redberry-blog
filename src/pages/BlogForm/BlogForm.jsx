import redberry from 'assets/main-logo.svg';
import { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from 'state/Context';
import fileUpload from 'assets/folder-add.svg';
import gallery from 'assets/gallery.svg';
import closeButton from 'assets/close.svg';
import arrowDown from 'assets/arrow-down.svg';
import close from 'assets/x.svg';
import {
  allValid,
  clearLocalStorage,
  validateAuthor,
  validateCategories,
  validateDate,
  validateDescription,
  validateHeader,
  validatePhoto,
  validateUploadEmail,
} from './helpers';
import { allCategoriesRequest, upload } from 'services';
import { UploadModalSuccess } from './components/UploadModalSuccess';

export const BlogForm = () => {
  const navigate = useNavigate();
  const first = useRef(true);
  const { loggedIn } = useContext(Context);
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const [selectedPhotoName, setSelectedPhotoName] = useState('');
  const [author, setAuthor] = useState('');
  const [authorErrors, setAuthorErrors] = useState({
    minFour: null,
    minTwoWords: null,
    onlyGeo: null,
    required: null,
  });
  const [header, setHeader] = useState('');
  const [headerErrors, setHeaderErrors] = useState({
    minTwo: null,
  });
  const [description, setDescription] = useState('');
  const [descriptionErrors, setDescriptionErros] = useState({
    minTwo: null,
  });
  const [date, setDate] = useState('');
  const [dateErrors, setDateErrors] = useState({ required: null });
  const [authorValid, setAuthorValid] = useState(null);
  const [headerValid, setHeaderValid] = useState(null);
  const [descriptionValid, setDescriptionValid] = useState(null);
  const [dateValid, setDateValid] = useState(null);
  const [categories, setCategories] = useState([]);
  const [openCategories, setOpenCategories] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCategoriesErrors, setSelectedCategoriesErrors] = useState({
    required: null,
  });
  const [categoriesValid, setCategoriesValid] = useState(null);
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [emailErrors, setEmailErrors] = useState({
    requiredOrGeo: null,
  });
  const [photoValid, setPhotoValid] = useState(null);
  const [photoErrors, setPhotoErrors] = useState({ required: null });
  const [ready, setReady] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (loggedIn === false) {
      navigate('/');
    }
  }, [loggedIn]);

  useEffect(() => {
    const image = localStorage.getItem('selectedPhoto');
    const name = localStorage.getItem('selectedPhotoName');
    if (image && name) {
      setSelectedPhoto(image);
      setSelectedPhotoName(name);
    }

    const author = localStorage.getItem('author');
    if (author) {
      setAuthor(author);
    }
  }, []);

  useEffect(() => {
    const email = localStorage.getItem('uploadEmail');
    if (email) {
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    const selectedCategories = JSON.parse(
      localStorage.getItem('selectedCategories'),
    );
    if (selectedCategories) {
      setSelectedCategories(selectedCategories);
    }
  }, []);

  useEffect(() => {
    const header = localStorage.getItem('header');
    if (header) {
      setHeader(header);
    }
  }, []);

  useEffect(() => {
    const description = localStorage.getItem('description');
    if (description) {
      setDescription(description);
    }
  }, []);

  useEffect(() => {
    const date = localStorage.getItem('date');
    if (date) {
      setDate(date);
    }
  }, []);

  useEffect(() => {
    const categories = JSON.parse(localStorage.getItem('selectedCategories'));
    if (categories) {
      setSelectedCategories(categories);
    }
  }, []);

  useEffect(() => {
    const authorErrorsObject = authorErrors;
    const author = localStorage.getItem('author');
    if (author !== null) {
      const errors = validateAuthor(author, authorErrorsObject);
      setAuthorErrors((prev) => ({ ...prev, ...errors }));
    } else {
      setAuthorErrors({
        minFour: null,
        minTwoWords: null,
        onlyGeo: null,
        required: null,
      });
    }
  }, []);

  useEffect(() => {
    const emailErrorsObject = emailErrors;
    const email = localStorage.getItem('uploadEmail');
    if (email !== null) {
      const errors = validateUploadEmail(email, emailErrorsObject);
      setEmailErrors((prev) => ({ ...prev, ...errors }));
    } else {
      setEmailErrors({ requiredOrGeo: null });
    }
  }, []);

  useEffect(() => {
    const descriptionErrorsObject = descriptionErrors;
    const description = localStorage.getItem('description');
    if (description !== null) {
      const errors = validateDescription(description, descriptionErrorsObject);
      setDescriptionErros((prev) => ({ ...prev, ...errors }));
    } else {
      setDescriptionErros({ minTwo: null });
    }
  }, []);

  useEffect(() => {
    const headerErrorsObject = headerErrors;
    const header = localStorage.getItem('header');
    if (header !== null) {
      const errors = validateHeader(header, headerErrorsObject);
      setHeaderErrors((prev) => ({ ...prev, ...errors }));
    } else {
      setHeaderErrors({ minTwo: null });
    }
  }, []);

  useEffect(() => {
    const dateErrorsObject = dateErrors;
    const date = localStorage.getItem('date');
    if (date !== null) {
      const errors = validateDate(date, dateErrorsObject);
      setDateErrors((prev) => ({ ...prev, ...errors }));
    } else {
      setDateErrors({ required: null });
    }
  }, []);

  useEffect(() => {
    const photoErrorsObject = photoErrors;
    const photo = localStorage.getItem('selectedPhoto');
    if (photo !== null) {
      const errors = validatePhoto(photo, photoErrorsObject);
      setPhotoErrors((prev) => ({ ...prev, ...errors }));
    } else {
      setPhotoErrors({ required: null });
    }
  }, []);

  useEffect(() => {
    const categoriesErrorsObject = selectedCategoriesErrors;
    const categoriesData = JSON.parse(
      localStorage.getItem('selectedCategories'),
    );
    if (categoriesData !== null) {
      const errors = validateCategories(categoriesData, categoriesErrorsObject);
      setSelectedCategoriesErrors((prev) => ({ ...prev, ...errors }));
    } else {
      setSelectedCategoriesErrors({ required: null });
    }
  }, []);

  useEffect(() => {
    for (const key in authorErrors) {
      if (authorErrors[key] === null) {
        setAuthorValid(null);
        localStorage.setItem('authorValid', false);
        return;
      } else if (!authorErrors[key]) {
        continue;
      } else {
        setAuthorValid(false);
        localStorage.setItem('authorValid', false);
        return;
      }
    }
    setAuthorValid(true);
    localStorage.setItem('authorValid', true);
  }, [authorErrors]);

  useEffect(() => {
    if (headerErrors['minTwo'] === null) {
      setHeaderValid(null);
      localStorage.setItem('headerValid', false);
    } else if (!headerErrors['minTwo']) {
      setHeaderValid(true);
      localStorage.setItem('headerValid', true);
    } else {
      setHeaderValid(false);
      localStorage.setItem('headerValid', false);
    }
  }, [headerErrors]);

  useEffect(() => {
    if (emailErrors['requiredOrGeo'] === null) {
      setEmailValid(null);
      localStorage.setItem('emailValid', false);
    } else if (!emailErrors['requiredOrGeo']) {
      setEmailValid(true);
      localStorage.setItem('emailValid', true);
    } else {
      setEmailValid(false);
      localStorage.setItem('emailValid', false);
    }
  }, [emailErrors]);

  useEffect(() => {
    if (descriptionErrors['minTwo'] === null) {
      setDescriptionValid(null);
      localStorage.setItem('descriptionValid', false);
    } else if (!descriptionErrors['minTwo']) {
      setDescriptionValid(true);
      localStorage.setItem('descriptionValid', true);
    } else {
      setDescriptionValid(false);
      localStorage.setItem('descriptionValid', false);
    }
  }, [descriptionErrors]);

  useEffect(() => {
    if (dateErrors['required'] === null) {
      setDateValid(null);
      localStorage.setItem('dateValid', false);
    } else if (!dateErrors['required']) {
      setDateValid(true);
      localStorage.setItem('dateValid', true);
    } else {
      setDateValid(false);
      localStorage.setItem('dateValid', false);
    }
  }, [dateErrors]);

  useEffect(() => {
    if (photoErrors['required'] === null) {
      setPhotoValid(null);
      localStorage.setItem('photoValid', false);
    } else if (!photoErrors['required']) {
      setPhotoValid(true);
      localStorage.setItem('photoValid', true);
    } else {
      setPhotoValid(false);
      localStorage.setItem('photoValid', false);
    }
  }, [photoErrors]);

  useEffect(() => {
    if (selectedCategoriesErrors['required'] === null) {
      setCategoriesValid(null);
      localStorage.setItem('categoriesValid', false);
    } else if (!selectedCategoriesErrors['required']) {
      setCategoriesValid(true);
      localStorage.setItem('categoriesValid', true);
    } else {
      setCategoriesValid(false);
      localStorage.setItem('categoriesValid', false);
    }
  }, [selectedCategoriesErrors]);

  const deletePhoto = () => {
    setSelectedPhoto('');
    setSelectedPhotoName('');
    localStorage.removeItem('selectedPhoto');
    localStorage.removeItem('selectedPhotoName');
    setPhotoErrors((prev) => ({ ...prev, required: true }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedPhotoName(file.name);
      localStorage.setItem('selectedPhotoName', file.name);
      localStorage.setItem('selectedPhoto', file);
      setSelectedPhoto(file);
      const photoErrorsObject = photoErrors;
      const errors = validatePhoto(file, photoErrorsObject);
      setPhotoErrors((prev) => ({ ...prev, ...errors }));
    }
  };

  const handleHeaderChange = (header) => {
    setHeader(header);
    localStorage.setItem('header', header);
    const headerErrorsObject = headerErrors;
    const errors = validateHeader(header, headerErrorsObject);
    setHeaderErrors((prev) => ({ ...prev, ...errors }));
  };

  const handleAuthorChange = (author) => {
    setAuthor(author);
    localStorage.setItem('author', author);
    const authorErrorsObject = authorErrors;
    const errors = validateAuthor(author, authorErrorsObject);
    setAuthorErrors((prev) => ({ ...prev, ...errors }));
  };

  const handleDescriptionChange = (description) => {
    setDescription(description);
    localStorage.setItem('description', description);
    const descriptionErrorsObject = descriptionErrors;
    const errors = validateDescription(description, descriptionErrorsObject);
    setDescriptionErros((prev) => ({ ...prev, errors }));
  };

  const handleDateChange = (date) => {
    setDate(date);
    localStorage.setItem('date', date);
    const dateErrorsObject = dateErrors;
    const errors = validateDate(date, dateErrorsObject);
    setDateErrors((prev) => ({ ...prev, ...errors }));
  };

  const handleEmailChange = (email) => {
    setEmail(email);
    localStorage.setItem('uploadEmail', email);
    const emailErrorsObject = emailErrors;
    const errors = validateUploadEmail(email, emailErrorsObject);
    setEmailErrors((prev) => ({ ...prev, ...errors }));
  };

  const handleSelectedCategories = (category) => {
    if (!selectedCategories.find((c) => c.id === category.id)) {
      const newCategories = [...selectedCategories, category];
      setSelectedCategories(newCategories);
      localStorage.setItem('selectedCategories', JSON.stringify(newCategories));
      const categoriesErrorsObject = selectedCategoriesErrors;
      const errors = validateCategories(newCategories, categoriesErrorsObject);
      setSelectedCategoriesErrors((prev) => ({ ...prev, ...errors }));
    }
  };
  const handleDeleteCategory = (category) => {
    const filteredCategories = selectedCategories.filter((c) => {
      return c.id !== category.id;
    });
    setSelectedCategories(filteredCategories);
    localStorage.setItem(
      'selectedCategories',
      JSON.stringify(filteredCategories),
    );
    const categoriesErrorsObject = selectedCategoriesErrors;
    const errors = validateCategories(
      filteredCategories,
      categoriesErrorsObject,
    );
    setSelectedCategoriesErrors((prev) => ({ ...prev, ...errors }));
  };

  useEffect(() => {
    allCategoriesRequest()
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategoriesDropDown = () => {
    setOpenCategories(!openCategories);
  };

  useEffect(() => {
    const ready = allValid([
      photoValid,
      authorValid,
      headerValid,
      descriptionValid,
      dateValid,
      categoriesValid,
      emailValid,
    ]);
    if (ready) {
      setReady(true);
    } else {
      setReady(false);
    }
  }, [
    photoValid,
    authorValid,
    headerValid,
    descriptionValid,
    dateValid,
    categoriesValid,
    emailValid,
  ]);

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('image', selectedPhoto);
    formData.append('title', header);
    formData.append('description', description);
    formData.append('author', author);
    formData.append('publish_date', date);
    formData.append(
      'categories',
      JSON.stringify(selectedCategories.map((c) => c.id)),
    );
    formData.append('email', email);
    if (ready) {
      upload(formData)
        .then(() => {
          console.log('successfully uploaded');
          setOpenModal(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleModal = () => {
    setOpenModal(false);
  };

  const clear = () => {
    clearLocalStorage([
      'date',
      'authorValid',
      'categoriesValid',
      'selectedCategories',
      'dateValid',
      'description',
      'selectedPhoto',
      'headerValid',
      'uploadEmail',
      'emailValid',
      'author',
      'header',
      'photoValid',
      'descriptionValid',
      'selectedPhotoName',
    ]);
  };

  return (
    <div>
      <div className='w-full h-20 flex justify-center items-center border-solid border-b-1 border-navbar-border'>
        <img
          className='cursor-pointer'
          src={redberry}
          alt='redberry logo'
          onClick={() => {
            clear();
            navigate('/');
          }}
        />
      </div>
      <div className='px-76 w-full flex pt-10 justify-between'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='44'
          height='44'
          viewBox='0 0 44 44'
          fill='none'
          className='cursor-pointer'
          onClick={() => {
            clear();
            navigate('/');
          }}
        >
          <rect
            width='44'
            height='44'
            rx='22'
            className='fill-[#E4E3EB] hover:fill-[#D9D8E0]'
          />
          <path
            d='M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z'
            fill='#1A1A1F'
          />
        </svg>
        <div className='w-600 mr-33vw flex flex-col font-fira-go mb-4'>
          <h3 className='font-bold text-blog-p text-32 mb-10'>
            ბლოგის დამატება
          </h3>
          <form className='flex flex-col mb-4'>
            {!selectedPhoto ? (
              <div class='col-span-full'>
                <label
                  for='cover-photo'
                  class='block text-sm font-medium leading-6 text-gray-900'
                >
                  ატვირთეთ ფოტო
                </label>
                <div class='mt-2 mb-6 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-14 bg-file-upload'>
                  <div class='text-center'>
                    <img
                      src={fileUpload}
                      class='mx-auto h-12 w-12 text-gray-300'
                      aria-hidden='true'
                      alt=''
                    />
                    <div class='w-full mt-4 font-normal flex text-sm leading-6 text-gray-600 gap-1 aling-center bg-file-upload'>
                      <p class='pl-1 bg-file-upload'>ჩააგდეთ ფაილი აქ ან</p>
                      <label
                        for='file-upload'
                        class='relative cursor-pointer font-semibold text-black underline bg-file-upload'
                      >
                        <span>აირჩიეთ ფაილი</span>
                        <input
                          onChange={handleFileChange}
                          id='file-upload'
                          accept='image/*'
                          name='file-upload'
                          type='file'
                          class='sr-only'
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className='w-full h-14 rounded-xl mb-6 bg-[#F2F2FA] flex justify-between items-center p-4'>
                <div className='flex gap-3 items-center'>
                  <img src={gallery} alt='uploaded photo' />
                  <p>{selectedPhotoName}</p>
                </div>
                <img
                  className='cursor-pointer'
                  src={closeButton}
                  alt=''
                  onClick={() => {
                    deletePhoto();
                  }}
                />
              </div>
            )}

            <div className='flex justify-between mb-6'>
              <div className='flex flex-col w-288'>
                <label
                  for='author'
                  class='block text-sm font-medium leading-6 text-gray-900 pb-2'
                >
                  ავტორი *
                </label>
                <input
                  name='author'
                  id='author'
                  type='text'
                  value={author}
                  className={
                    authorValid == null
                      ? 'input mb-2'
                      : authorValid
                        ? 'input-green mb-2'
                        : 'input-error mb-2'
                  }
                  placeholder='შეიყვნეთ ავტორი'
                  onChange={(event) => {
                    handleAuthorChange(event.target.value);
                  }}
                />
                <div className='flex flex-col'>
                  <div className='flex items-start pl-2 gap-2'>
                    <span
                      className={
                        authorErrors.minFour == null
                          ? 'text-[#85858D]'
                          : authorErrors.minFour
                            ? 'text-[#85858D]'
                            : 'text-[#14D81C]'
                      }
                    >
                      &#x2022;
                    </span>
                    <p
                      className={
                        authorErrors.minFour == null
                          ? 'error-text-grey'
                          : authorErrors.minFour
                            ? 'error-text-red'
                            : 'error-text-green'
                      }
                    >
                      მინიმუმ 4 სიმბოლო
                    </p>
                  </div>
                  <div className='flex items-start pl-2 gap-2'>
                    <span
                      className={
                        authorErrors.minTwoWords == null
                          ? 'text-[#85858D]'
                          : authorErrors.minTwoWords
                            ? 'text-[#85858D]'
                            : 'text-[#14D81C]'
                      }
                    >
                      &#x2022;
                    </span>
                    <p
                      className={
                        authorErrors.minTwoWords == null
                          ? 'error-text-grey'
                          : authorErrors.minTwoWords
                            ? 'error-text-red'
                            : 'error-text-green'
                      }
                    >
                      მინიმუმ ორი სიტყვა
                    </p>
                  </div>
                  <div className='flex items-start pl-2 gap-2'>
                    <span
                      className={
                        authorErrors.onlyGeo == null
                          ? 'text-[#85858D]'
                          : authorErrors.onlyGeo
                            ? 'text-[#85858D]'
                            : 'text-[#14D81C]'
                      }
                    >
                      &#x2022;
                    </span>
                    <p
                      className={
                        authorErrors.onlyGeo == null
                          ? 'error-text-grey'
                          : authorErrors.onlyGeo
                            ? 'error-text-red'
                            : 'error-text-green'
                      }
                    >
                      მხოლოდ ქართული სიმბოლოები
                    </p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-288'>
                <label
                  for='header'
                  class='block text-sm font-medium leading-6 text-gray-900 pb-2'
                >
                  სათური *
                </label>
                <input
                  name='header'
                  id='header'
                  type='text'
                  value={header}
                  onChange={(event) => handleHeaderChange(event.target.value)}
                  className={
                    headerValid == null
                      ? 'input mb-2'
                      : headerValid
                        ? 'input-green mb-2'
                        : 'input-error mb-2'
                  }
                  placeholder='შეიყვნეთ სათაური'
                />
                <div className='flex flex-col'>
                  <p
                    className={
                      headerErrors.minTwo == null
                        ? 'error-text-grey'
                        : headerErrors.minTwo
                          ? 'error-text-red'
                          : 'error-text-green'
                    }
                  >
                    მინიმუმ 2 სიმბოლო
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col mb-6'>
              <label
                for='description'
                class='block text-sm font-medium leading-6 text-gray-900 pb-2'
              >
                აღწერა *
              </label>
              <textarea
                id='description'
                name='description'
                type='text'
                value={description}
                className={
                  descriptionValid == null
                    ? 'input mb-2 h-124 resize-none'
                    : descriptionValid
                      ? 'input-green mb-2 h-124 resize-none'
                      : 'input-error mb-2 h-124 resize-none'
                }
                onChange={(event) =>
                  handleDescriptionChange(event.target.value)
                }
                placeholder='შეიყვნეთ აღწერა'
              />
              <p
                className={
                  descriptionErrors.minTwo == null
                    ? 'error-text-grey'
                    : descriptionErrors.minTwo
                      ? 'error-text-red'
                      : 'error-text-green'
                }
              >
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
            <div className='flex justify-between mb-6'>
              <div className='flex flex-col w-288'>
                <label
                  for='date'
                  class='block text-sm font-medium leading-6 text-gray-900 pb-2'
                >
                  გამოქვეყნების თარიღი *
                </label>
                <input
                  id='date'
                  value={date}
                  onChange={(event) => {
                    handleDateChange(event.target.value);
                  }}
                  name='date'
                  type='date'
                  className={
                    dateValid == null
                      ? 'input mb-2'
                      : dateValid
                        ? 'input-green mb-2'
                        : 'input-error mb-2'
                  }
                />
              </div>
              <div className='flex flex-col w-288 relative'>
                <label
                  for='categories'
                  class='block text-sm font-medium leading-6 text-gray-900 pb-2'
                >
                  კატეგორია *
                </label>
                <div
                  className={
                    categoriesValid == null
                      ? 'categories-div'
                      : categoriesValid
                        ? 'categories-div-green'
                        : 'categories-div-red'
                  }
                >
                  <div className='flex h-min '>
                    {selectedCategories.length === 0 ? (
                      <p className='text-[#1A1A1F] text-sm font-normal'>
                        აირჩიეთ კატეგორია
                      </p>
                    ) : (
                      <div className='w-225 flex gap-2 overflow-x-scroll'>
                        {selectedCategories.map((category) => (
                          <div
                            key={category.id}
                            style={{
                              backgroundColor: `${category.background_color}`,
                              color: category.text_color,
                            }}
                            className='category-button w-min flex gap-2'
                          >
                            <p>{category.title}</p>
                            <img
                              className='pr-2'
                              src={close}
                              alt=''
                              onClick={() => {
                                handleDeleteCategory(category);
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <img
                    className='cursor-pointer p-1'
                    src={arrowDown}
                    alt=''
                    onClick={handleCategoriesDropDown}
                  />
                </div>
                <div
                  className={
                    openCategories
                      ? 'categories-drop-down-opened'
                      : 'categories-drop-down-closed'
                  }
                >
                  {categories.map((category) => (
                    <div
                      key={category.id}
                      style={{
                        backgroundColor: selectedCategories.find(
                          (c) => c.id === category.id,
                        )
                          ? `${category.background_color}`
                          : `${category.background_color}50`,
                        color: selectedCategories.find(
                          (c) => c.id === category.id,
                        )
                          ? `${category.text_color}`
                          : `${category.background_color}`,
                      }}
                      onClick={() => {
                        handleSelectedCategories(category);
                      }}
                      className='category-button w-min'
                    >
                      {category.title}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col mb-6'>
              <label
                for='mail'
                class='block text-sm font-medium leading-6 text-gray-900 pb-2'
              >
                ელ-ფოსტა
              </label>
              <input
                id='mail'
                name='mail'
                type='text'
                value={email}
                onChange={(event) => {
                  handleEmailChange(event.target.value);
                }}
                className={
                  emailValid == null
                    ? 'input mb-2'
                    : emailValid
                      ? 'input-green mb-2'
                      : 'input-error mb-2'
                }
                placeholder='Example@redberry.ge'
              />
            </div>
          </form>
          <div className='w-full flex justify-end'>
            <div
              className={
                ready ? 'upload-button-active' : 'upload-button-disabled'
              }
              onClick={() => {
                handleSubmit();
              }}
            >
              გამოქვეყნება
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <UploadModalSuccess
          open={openModal}
          closeModal={handleModal}
          clear={clear}
        />
      )}
    </div>
  );
};

import redberry from 'assets/main-logo.svg';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from 'state/Context';
import fileUpload from 'assets/folder-add.svg';
import gallery from 'assets/gallery.svg';
import closeButton from 'assets/close.svg';

export const BlogForm = () => {
  const navigate = useNavigate();
  const { loggedIn } = useContext(Context);
  const [selectedPhoto, setSelectedPhoto] = useState('');
  const [selectedPhotoName, setSelectedPhotoName] = useState('');

  console.log(selectedPhoto);

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
  }, []);

  const deletePhoto = () => {
    setSelectedPhoto('');
    setSelectedPhotoName('');
    localStorage.removeItem('selectedPhoto');
    localStorage.removeItem('selectedPhotoName');
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      setSelectedPhotoName(file.name);
      localStorage.setItem('selectedPhotoName', file.name);

      reader.onloadend = () => {
        localStorage.setItem('selectedPhoto', reader.result);
        setSelectedPhoto(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className='w-full h-20 flex justify-center items-center border-solid border-b-1 border-navbar-border'>
        <img
          className='cursor-pointer'
          src={redberry}
          alt='redberry logo'
          onClick={() => {
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
                    <div class='w-full mt-4 font-normal flex text-sm leading-6 text-gray-600 gap-1 aling-center'>
                      <p class='pl-1'>ჩააგდეთ ფაილი აქ ან</p>
                      <label
                        for='file-upload'
                        class='relative cursor-pointer bg-white font-semibold text-black underline'
                      >
                        <span>აირჩიეთ ფაილი</span>
                        <input
                          onChange={handleFileChange}
                          id='file-upload'
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
              <div className='w-full h-14 rounded-xl bg-[#F2F2FA] flex justify-between items-center p-4'>
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
                  className='input mb-2'
                  placeholder='შეიყვნეთ ავტორი'
                />
                <div className='flex flex-col'>
                  <div className='flex items-start pl-2 gap-2'>
                    <span className='text-[#85858D]'>&#x2022;</span>
                    <p className='text-[#85858D] text-xs font-normal'>
                      მინიმუმ 4 სიმბოლო
                    </p>
                  </div>
                  <div className='flex items-start pl-2 gap-2'>
                    <span className='text-[#85858D]'>&#x2022;</span>
                    <p className='text-[#85858D] text-xs font-normal'>
                      მინიმუმ ორი სიტყვა
                    </p>
                  </div>
                  <div className='flex items-start pl-2 gap-2'>
                    <span className='text-[#85858D]'>&#x2022;</span>
                    <p className='text-[#85858D] text-xs font-normal'>
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
                  className='input mb-2'
                  placeholder='შეიყვნეთ სათაური'
                />
                <div className='flex flex-col'>
                  <p className='text-[#85858D] text-xs font-normal'>
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
                className='input mb-2 h-124 resize-none'
                placeholder='შეიყვნეთ აღწერა'
              />
              <p className='text-[#85858D] text-xs font-normal'>
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
                  name='date'
                  type='date'
                  className='input mb-2'
                />
              </div>
              <div className='flex flex-col w-288'>
                <label
                  for='categories'
                  class='block text-sm font-medium leading-6 text-gray-900 pb-2'
                >
                  კატეგორია *
                </label>
                <input
                  name='categories'
                  id='categories'
                  type='text'
                  className='input mb-2'
                  placeholder='შეიყვნეთ სათაური'
                />
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
                className='input mb-2'
                placeholder='Example@redberry.ge'
              />
            </div>
          </form>
          <div className='w-full flex justify-end'>
            <div className='w-288 cursor-pointer font-medium bg-button-background-main rounded-xl flex justify-center align-center font-sm text-white py-2.5 mb-5'>
              გამოქვეყნება
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import closeButton from 'assets/close.svg';
import errorIcon from 'assets/input-error.svg';
import { validateEmail } from 'functions/validation';
import { useEffect, useState } from 'react';
import { Login } from 'services';
import { SuccessModal } from './SuccessModal';

export const LoginModal = ({ openModal, handleModalClick }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const error = localStorage.getItem('login_error');
    if (error) {
      if (error === 'false') {
        setError(false);
      } else {
        setError(error);
      }
    }
  }, []);

  useEffect(() => {
    const email = localStorage.getItem('login_email');
    if (email) {
      setEmail(email);
    }
  }, []);

  const login = () => {
    if (email !== '' && !error) {
      Login(email)
        .then((response) => {
          setSuccess(true);
          console.log('sucessfully logged in');
        })
        .catch((err) => {
          const error_message = 'ელ-ფოსტა არ მოიძებნა';
          setError(error_message);
          localStorage.setItem('login_error', error_message);
        });
    }
    if (email === '') {
      const error_message = 'მეილის ველი აუცილებელია';
      setError(error_message);
      localStorage.setItem('login_error', error_message);
    }
  };

  const handleSuccess = () => {
    setSuccess(false);
    handleModalClick();
    setError(false);
    localStorage.setItem('login_error', false);
    setEmail('');
    localStorage.setItem('login_email', '');
  };

  const handleEmailChange = (event) => {
    let error_message = '';
    const email = event.target.value;
    setEmail(email);
    localStorage.setItem('login_email', email);
    if (email === '') {
      error_message = 'მეილის ველი აუცილებელია';
      setError(error_message);
      localStorage.setItem('login_error', error_message);
    } else if (!validateEmail(email)) {
      error_message = 'მეილი უნდა მთავრდებოდეს @redberry.ge-ით';
      setError('მეილი უნდა მთავრდებოდეს @redberry.ge-ით');
      localStorage.setItem('login_error', error_message);
    } else {
      setError(error_message);
      localStorage.setItem('login_error', false);
    }
  };

  return (
    <>
      <div className={openModal && !success ? 'modal-block' : 'modal-hidden'}>
        <div className='w-480 bg-white rounded-xl flex flex-col p-5 font-fira-go'>
          <div className='flex justify-end'>
            <img
              src={closeButton}
              className='w-6  h-6 cursor-pointer'
              onClick={() => {
                handleModalClick();
                setError(false);
                localStorage.setItem('login_error', false);
                setEmail('');
                localStorage.setItem('login_email', '');
              }}
              alt=''
            />
          </div>
          <p className='text-blog-p text-center font-fira-go text-2xl font-bold pb-6'>
            შესვლა
          </p>
          <div className='flex flex-col gap-2'>
            <p className='text-blog-p text-sm'>ელ-ფოსტა</p>
            <input
              value={email}
              required
              type='text'
              onChange={handleEmailChange}
              className={error ? 'login-input-error' : 'login-input'}
              placeholder='Example@redberry.ge'
            />
          </div>
          {error && (
            <div className='flex -mt-4 pb-6 gap-2 items-center'>
              <img src={errorIcon} alt='' />
              <p className='text-error-text-color text-xs font-normal'>
                {error}
              </p>
            </div>
          )}
          <div
            className='cursor-pointer font-medium bg-button-background-main rounded-xl flex justify-center align-center font-sm text-white py-2.5 mb-5'
            onClick={() => login()}
          >
            შესვლა
          </div>
        </div>
      </div>
      <SuccessModal success={success} handleSuccess={handleSuccess} />
    </>
  );
};

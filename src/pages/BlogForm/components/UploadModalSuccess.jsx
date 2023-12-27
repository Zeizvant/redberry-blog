import closeButton from 'assets/close.svg';
import Tick from 'assets/tick-circle.svg';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const UploadModalSuccess = ({ open, closeModal, clear }) => {
  const navigate = useNavigate();

  useEffect(() => {
    open && document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <div className={open ? 'modal-block absolute' : 'modal-hidden'}>
      <div className='w-480 h-300px bg-white rounded-xl flex flex-col p-5 font-fira-go gap-2'>
        <div className='flex justify-end'>
          <img
            src={closeButton}
            className='w-6 h-6 cursor-pointer'
            onClick={() => {
              closeModal();
            }}
            alt=''
          />
        </div>
        <div className='flex justify-center pb-2'>
          <img src={Tick} alt='' />
        </div>
        <p className='text-blog-p text-center font-fira-go text-xl font-bold pb-10'>
          ჩანაწერი წარმატებით დაემატა
        </p>
        <div
          className='cursor-pointer font-medium bg-button-background-main rounded-xl flex justify-center align-center font-sm text-white py-2.5 mb-5'
          onClick={() => {
            closeModal();
            clear();
            navigate('/');
          }}
        >
          მთავარ გვერდზე დაბრუნება
        </div>
      </div>
    </div>
  );
};

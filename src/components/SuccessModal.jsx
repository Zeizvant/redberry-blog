import closeButton from 'assets/close.svg';
import Tick from 'assets/tick-circle.svg';
import { useContext } from 'react';
import { Context } from 'state/Context';

export const SuccessModal = ({ success, handleSuccess }) => {
  const { changeLoggedIn } = useContext(Context);

  return (
    <div className={success ? 'modal-block' : 'modal-hidden'}>
      <div className='w-480 h-300px bg-white rounded-xl flex flex-col p-5 font-fira-go gap-2'>
        <div className='flex justify-end'>
          <img
            src={closeButton}
            className='w-6 h-6 cursor-pointer'
            onClick={() => {
              handleSuccess();
            }}
            alt=''
          />
        </div>
        <div className='flex justify-center pb-2'>
          <img src={Tick} alt='' />
        </div>
        <p className='text-blog-p text-center font-fira-go text-xl font-bold pb-10'>
          წარმატებული ავტორიზაცია
        </p>
        <div
          className='cursor-pointer font-medium bg-button-background-main rounded-xl flex justify-center align-center font-sm text-white py-2.5 mb-5'
          onClick={() => changeLoggedIn(true)}
        >
          კარგი
        </div>
      </div>
    </div>
  );
};

import mainLogo from 'assets/main-logo.svg';
import { useContext, useEffect, useState } from 'react';
import { LoginModal } from './LoginModal';
import { Context } from 'state/Context';
import { useNavigate } from 'react-router';

export const NavBar = () => {
  const [openModal, setOpenModal] = useState(false);
  const { loggedIn } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    const modal = JSON.parse(localStorage.getItem('openModal'));
    if (modal) {
      setOpenModal(modal);
    }
  }, []);

  const handleModalClick = () => {
    setOpenModal(!openModal);
    JSON.stringify(localStorage.setItem('openModal', !openModal));
  };

  return (
    <div className='w-full flex px-76 h-20 items-center justify-between border-solid border-b-1 border-navbar-border'>
      <img
        className='cursor-pointer'
        src={mainLogo}
        alt='main logo'
        onClick={() => {
          navigate('/');
        }}
      />
      {loggedIn ? (
        <div
          className='main-button px-5 py-2.5'
          onClick={() => {
            navigate('/add');
          }}
        >
          დაამატე ბლოგი
        </div>
      ) : (
        <div className='main-button px-5 py-2.5' onClick={handleModalClick}>
          შესვლა
        </div>
      )}
      {openModal && (
        <LoginModal openModal={openModal} handleModalClick={handleModalClick} />
      )}
    </div>
  );
};

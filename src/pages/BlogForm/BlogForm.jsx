import redberry from 'assets/main-logo.svg';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from 'state/Context';

export const BlogForm = () => {
  const navigate = useNavigate();
  const { loggedIn } = useContext(Context);
  useEffect(() => {
    console.log(1);
    if (loggedIn === false) {
      console.log(loggedIn);
      navigate('/');
    }
  }, [loggedIn]);

  return (
    <div>
      <div className='w-full h-20 flex justify-center items-center border-solid border-b-1 border-navbar-border'>
        <img src={redberry} alt='redberry logo' />
      </div>
    </div>
  );
};

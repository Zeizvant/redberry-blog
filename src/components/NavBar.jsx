import MainLogo from 'assets/main-logo.svg';

export const NavBar = () => {
  return (
    <div className='w-full flex px-76 h-20 items-center justify-between border-solid border-b-1 border-navbar-border'>
      <img src={MainLogo} alt='main logo' />
      <div className='main-button px-5 py-2.5'>შესვლა</div>
    </div>
  );
};

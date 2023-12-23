import { NavBar } from 'components/NavBar';
import { CategoryList } from './components/CategoryList';

export const BlogListing = () => {
  return (
    <div>
      <NavBar />
      <div className='w-full px-76 bg-main-background pt-16'>
        <div className='flex h-200 flex flex-col justify-center bg-inherit bg-main-bg bg-no-repeat bg-right bg-main-background'>
          <h1 className='text-main-text font-bold text-64 font-fira-go h-fit'>
            ბლოგი
          </h1>
        </div>
        <CategoryList />
      </div>
    </div>
  );
};

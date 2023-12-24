import { Blog } from 'components/Blog';

export const BlogList = () => {
  return (
    <div className='grid grid-cols-3 font-fira-go w-full gap-y-14 pb-14'>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

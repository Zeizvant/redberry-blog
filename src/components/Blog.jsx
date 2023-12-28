import TestImg from 'assets/test-blog.png';
import More from 'assets/more.svg';
import { useNavigate } from 'react-router';

export const Blog = ({
  id,
  author,
  date,
  title,
  categories,
  description,
  image,
}) => {
  const navigate = useNavigate();
  return (
    <div className='flex justify-self-start w-408 flex-col gap-2'>
      <img src={image} className='rounded-xl w-408 h-328 object-cover' />
      <p className='text-blog-p pt-4'>{author}</p>
      <p className='text-xs font-normal text-gray-date'>{date}</p>
      <p className='text-xl text-blog-p font-medium pt-2'>{title}</p>
      <div className='flex gap-4 pt-4 pb-4 overflow-scroll w-408 text-nowrap'>
        {categories.map((category) => {
          return (
            <div
              style={{
                color: category.background_color,
                backgroundColor: `${category.background_color}20`,
              }}
              className='py-1.5 px-2.5 rounded-30 text-xs font-medium'
            >
              {category.title}
            </div>
          );
        })}
      </div>
      <p className='text-blog-paragraph font-normal leading-7 h-14'>
        {description}
      </p>
      <div className='pt-2 flex align-center gap-1 font-medium text-sm cursor-pointer'>
        <p
          className='text-more-button'
          onClick={() => {
            navigate(`/blogs/${id}`);
          }}
        >
          სრულად ნახვა
        </p>
        <img src={More} />
      </div>
    </div>
  );
};

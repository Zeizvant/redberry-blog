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
    <div className='flex justify-self-start w-408 flex-col gap-2 font-fira-go'>
      <img src={image} className='rounded-xl w-408 h-328 object-cover' alt='' />
      <p className='text-blog-p pt-4'>{author}</p>
      <p className='text-xs font-normal text-gray-date'>
        {date.replace(/-/g, '.')}
      </p>
      <p className="text-xl h-12 text-blog-p font-medium pt-2 text-nowrap overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'">
        {title}
      </p>
      <div className="flex gap-4 pt-4 pb-4 overflow-scroll w-408 text-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'">
        {categories.map((category) => {
          return (
            <div
              key={category.id}
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
      <p className='text-blog-paragraph font-normal leading-7 h-14 text-more'>
        {description}
      </p>
      <div
        onClick={() => {
          navigate(`/blogs/${id}`);
        }}
        className='pt-2 flex align-center gap-1 font-medium text-sm cursor-pointer'
      >
        <p className='text-more-button'>
          <p>სრულად ნახვა</p>
        </p>
        <img src={More} />
      </div>
    </div>
  );
};

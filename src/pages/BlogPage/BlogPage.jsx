import { NavBar } from 'components/NavBar';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { allBlogsRequest, getBlogsRequest } from 'services';
import { Carousel } from './components/Carousel';

export const BlogPage = () => {
  const [blog, setBlog] = useState();
  const [blogs, setBlogs] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    getBlogsRequest(id)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    allBlogsRequest()
      .then((response) => {
        setBlogs(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <NavBar />
      {blog && (
        <div className='px-76 w-full flex pt-10 justify-between bg-[#F3F2FA]'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='44'
            height='44'
            viewBox='0 0 44 44'
            fill='none'
            className='cursor-pointer'
            onClick={() => {
              navigate('/');
            }}
          >
            <rect
              width='44'
              height='44'
              rx='22'
              className='fill-[#E4E3EB] hover:fill-[#D9D8E0]'
            />
            <path
              d='M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z'
              fill='#1A1A1F'
            />
          </svg>
          <div className='w-600 mr-33vw flex flex-col font-fira-go mb-4'>
            <img
              className='w-720 h-328 rounded-xl object-cover'
              src={blog.image}
              alt=''
            />
            <h3 className='text-[#1A1A1F] font-medium text-base pt-10'>
              {blog.author}
            </h3>
            <p className='font-normal text-xs text-[#85858D] mt-2'>
              {blog.publish_date} &#x2022; {blog.email}
            </p>
            <p className='font-bold text-[#1A1A1F] text-3xl mt-6'>
              {blog.title}
            </p>
            <div className="flex gap-4 mt-6 pb-4 overflow-scroll w-720 text-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'">
              {blog.categories.map((category) => {
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
            <p className='mt-10  text-[#404049] font-base font-normal leading-7'>
              {blog.description}
            </p>
          </div>
        </div>
      )}
      {blog && (
        <div className='bg-[#F3F2FA] flex px-76 flex-col pt-24 relative'>
          <p className='text-[#1A1A1F] text-3xl font-bold flex h-11 items-center'>
            მსგავსი სტატიები
          </p>
          <Carousel
            items={blogs.filter((item) => {
              return (
                item.id != blog.id &&
                blog.categories.some((category) => {
                  return item.categories.some((c) => {
                    return c.title == category.title;
                  });
                })
              );
            })}
          />
        </div>
      )}
    </div>
  );
};

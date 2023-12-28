import { Blog } from 'components/Blog';
import { useContext, useEffect, useState } from 'react';
import { allBlogsRequest } from 'services';
import { Context } from 'state/Context';

export const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);
  const { buttonClicked } = useContext(Context);

  useEffect(() => {
    allBlogsRequest()
      .then((response) => {
        setBlogs(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonClicked]);

  useEffect(() => {
    let filtered = [];
    if (buttonClicked.length === 0) {
      filtered = blogs;
    } else {
      filtered = blogs.filter((blog) => {
        return blog.categories.some((category) => {
          return buttonClicked.includes(category.title);
        });
      });
    }
    setFilteredBlogs(filtered);
  }, [buttonClicked]);

  return (
    filteredBlogs && (
      <div className='grid grid-cols-3 font-fira-go w-full gap-y-14 pb-14'>
        {buttonClicked.length !== 0
          ? blogs
              .filter((blog) => {
                return blog.categories.some((category) => {
                  return buttonClicked.includes(category.title);
                });
              })
              .map((blog) => {
                return (
                  <Blog
                    key={blog.id}
                    id={blog.id}
                    author={blog.author}
                    date={blog.date}
                    title={blog.title}
                    categories={blog.categories}
                    description={blog.description}
                    image={blog.image}
                  />
                );
              })
          : blogs.map((blog) => {
              return (
                <Blog
                  key={blog.id}
                  id={blog.id}
                  author={blog.author}
                  date={blog.date}
                  title={blog.title}
                  categories={blog.categories}
                  description={blog.description}
                  image={blog.image}
                />
              );
            })}
      </div>
    )
  );
};

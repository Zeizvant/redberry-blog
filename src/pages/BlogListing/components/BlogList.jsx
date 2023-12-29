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
      <div className='grid grid-container font-fira-go w-full gap-y-14 pb-14 justify-between'>
        {buttonClicked.length !== 0
          ? blogs
              .filter((blog) => {
                return blog.categories.some((category) => {
                  return (
                    buttonClicked.includes(category.title) &&
                    new Date(blog.publish_date) < new Date()
                  );
                });
              })
              .map((blog) => {
                return (
                  <Blog
                    key={blog.id}
                    id={blog.id}
                    author={blog.author}
                    date={blog.publish_date}
                    title={blog.title}
                    categories={blog.categories}
                    description={blog.description}
                    image={blog.image}
                  />
                );
              })
          : blogs
              .filter((blog) => {
                return new Date(blog.publish_date) < new Date();
              })
              .map((blog) => {
                return (
                  <Blog
                    key={blog.id}
                    id={blog.id}
                    author={blog.author}
                    date={blog.publish_date}
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

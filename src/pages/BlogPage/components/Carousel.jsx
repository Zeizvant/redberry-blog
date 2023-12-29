import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow } from './NextArrow';
import { PrevArrow } from './PrevArrow';
import { Blog } from 'components/Blog';

export const Carousel = ({ items }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className='pt-10 pb-20'>
      {items.map((blog) => (
        <div key={blog.id} className='p-4'>
          <Blog
            id={blog.id}
            author={blog.author}
            date={blog.publish_date}
            title={blog.title}
            categories={blog.categories}
            description={blog.description}
            image={blog.image}
          />
        </div>
      ))}
    </Slider>
  );
};

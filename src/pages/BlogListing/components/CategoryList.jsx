import { useState, useEffect, useRef, useContext } from 'react';
import { AllCategoriesRequest } from 'services';
import { Context } from 'state/Context';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [buttonClicked, setButtonClicked] = useState([]);
  const firstUpdate = useRef(true);
  const { changeButtonClicked } = useContext(Context);

  useEffect(() => {
    AllCategoriesRequest()
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      const clicked = JSON.parse(localStorage.getItem('buttonClicked'));
      if (clicked) {
        setButtonClicked(clicked);
        changeButtonClicked(buttonClicked);
      }
    } else {
      localStorage.setItem('buttonClicked', JSON.stringify(buttonClicked));
      changeButtonClicked(buttonClicked);
    }
  }, [buttonClicked]);

  const handleCategoryClick = (title) => {
    if (buttonClicked.includes(title)) {
      setButtonClicked(buttonClicked.filter((cat) => cat != title));
    } else {
      setButtonClicked([...buttonClicked, title]);
    }
  };

  return (
    <div className='pt-16 w-full flex justify-center'>
      <div className='flex w-684 overflow-scroll gap-6 pb-4 font-medium'>
        {categories.map((category) => (
          <div
            key={category.id}
            style={{
              backgroundColor: `${category.background_color}50`,
              color: category.text_color,
            }}
            className={
              buttonClicked.includes(category.title)
                ? 'clicked-category-button'
                : 'category-button'
            }
            onClick={() => handleCategoryClick(category.title)}
          >
            {category.title}
          </div>
        ))}
      </div>
    </div>
  );
};

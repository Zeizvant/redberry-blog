import { useState, useEffect, useRef, useContext } from 'react';
import { allCategoriesRequest } from 'services';
import { Context } from 'state/Context';

export const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const firstUpdate = useRef(true);
  const { buttonClicked, changeButtonClicked } = useContext(Context);

  useEffect(() => {
    allCategoriesRequest()
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleCategoryClick = (title) => {
    if (buttonClicked.includes(title)) {
      changeButtonClicked(buttonClicked.filter((cat) => cat != title));
    } else {
      changeButtonClicked([...buttonClicked, title]);
    }
  };

  return (
    <div className='pt-16 w-full flex justify-center'>
      <div className='flex w-684 overflow-scroll gap-6 pb-4 font-medium'>
        {categories.map((category) => (
          <div
            key={category.id}
            style={{
              color: category.background_color,
              backgroundColor: `${category.background_color}20`,
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

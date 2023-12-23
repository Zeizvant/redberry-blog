import instance from './axios';
import { token } from './axios';

export const AllCategoriesRequest = async () => {
  return await instance.get('categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

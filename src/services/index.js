import instance from './axios';
import { token } from './axios';

export const AllCategoriesRequest = async () => {
  return await instance.get('categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const Login = async (email) => {
  return await instance.post('login', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    email: email,
  });
};

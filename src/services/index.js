import instance, { uploadIntance } from './axios';
import { token } from './axios';

export const allCategoriesRequest = async () => {
  return await instance.get('categories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const allBlogsRequest = async () => {
  return await instance.get('blogs', {
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

export const upload = async (data) => {
  return await uploadIntance.post('blogs', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

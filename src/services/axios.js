import axios from 'axios';

export const token =
  '969cbd145a49626e8595ac8f1c8745b763e977decea5beeee738780cfb720cdb';

const instance = axios.create({
  baseURL: 'https://api.blog.redberryinternship.ge/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const uploadIntance = axios.create({
  baseURL: 'https://api.blog.redberryinternship.ge/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  },
});

export default instance;

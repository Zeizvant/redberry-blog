import axios from 'axios';

export const token =
  '4c515061e1938b366d81d090b9a13ca90102191cee6c4c190b2be5e766be7e41';

const instance = axios.create({
  baseURL: 'https://api.blog.redberryinternship.ge/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default instance;

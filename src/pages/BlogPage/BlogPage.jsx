import { useParams } from 'react-router';

export const BlogPage = () => {
  const { id } = useParams();
  return <div>blog page {id}</div>;
};

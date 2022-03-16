import { useEffect } from 'react';
import { navigate } from 'gatsby';

const IndexPage = () => {
  useEffect(() => {
    navigate('/film');
  });
  return null;
};

export default IndexPage;

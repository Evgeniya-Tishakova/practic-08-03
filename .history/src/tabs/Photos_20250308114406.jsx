import { Form } from '../components/Form/Form';
import Text from '../components/Text/Text';
import { useEffect, useState } from 'react';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async () => {
      setIsLoading(true);
      try {
        const data = await getPhotos(query, page);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPhotos();
  }, [page, query]);

  const getQuery = inputValue => {
    setQuery(inputValue);
  };
  console.log('photos query', query);
  return (
    <>
      <Form onSubmit={getQuery}></Form>
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};

export default Photos;

import { Form } from '../components/Form/Form';
import Text from '../components/Text/Text';
import { useEffect, useState } from 'react';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPhotos = async () => {};
  }, []);

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

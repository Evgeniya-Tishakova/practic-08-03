import { Form } from '../components/Form/Form';
import Text from '../components/Text/Text';
import { useEffect, useState } from 'react';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchPhotos = async () => {
      setIsLoading(true);
      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page
        );

        if (!photos.length) {
          setIsEmpty(true);
          return;
        }
        setImages(prevImages => [...prevImages, ...photos]); //prevImages === images
        setIsVisible(page < Math.ceil(total_results / per_page));
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

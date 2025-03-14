import { getPhotos } from '../apiService/photos';
import { Form } from '../components/Form/Form';
import Loader from '../components/Loader/Loader';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Text from '../components/Text/Text';
import { useEffect, useState } from 'react';
import Button from '../components/Button/Button';
import Grid from '../components/Grid/Grid';

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
    setImages([]);
    setPage(1);
    setError(null);
    setIsEmpty(false);
    setIsVisible(false);
  };
  console.log('photos query', query);

  return (
    <>
      <Form onSubmit={getQuery} />
      <Grid images={images} />
      {isLoading && <Loader />}
      {error && <Text textAlign="center">Ooops!Something went wrong...</Text>}
      {!error && !isEmpty && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}

      {isEmpty && <Text textAlign="center">Sorry, we don't found</Text>}
      {images.length > 0 && <PhotosGallery images={images} />}
      {isVisible && (
        <Button
          images={images}
          handleClick={() => setPage(page + 1)}
          disabled={isLoading}
        >
          {isLoading ? 'Loading more...' : 'Load more'}
        </Button>
      )}
    </>
  );
};

export default Photos;

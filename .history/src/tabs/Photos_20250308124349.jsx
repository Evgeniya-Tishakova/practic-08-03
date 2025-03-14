import { getPhotos } from '../apiService/photos';
import { Form } from '../components/Form/Form';
import Loader from '../components/Loader/Loader';
import PhotosGallery from '../components/PhotosGallery/PhotosGallery';
import Text from '../components/Text/Text';
import { useEffect, useState } from 'react';

const images = [
  {
    id: 3573351,
    avg_color: '#374824',
    src: {
      original:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
      large:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
      medium:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
      small:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
    },
    alt: 'Brown Rocks During Golden Hour',
  },
  {
    id: 35733515,
    avg_color: '#374824',
    src: {
      original:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png',
      large:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=650&w=940',
      medium:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=350',
      small:
        'https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&h=130',
    },
    alt: 'Brown Rocks During Golden Hour',
  },
];

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
      <Form onSubmit={getQuery} />
      {isLoading && <Loader />}
      {error && <Text textAlign="center">Ooops!Something went wrong...</Text>}
      {!error && !isEmpty && (
        <Text textAlign="center">Let`s begin search 🔎</Text>
      )}

      {isEmpty && <Text textAlign="center">Sorry, we don't found</Text>}
      {images.length > 0 && <PhotosGallery images={images} />}
    </>
  );
};

export default Photos;

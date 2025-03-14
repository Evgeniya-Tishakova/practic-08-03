import css from './PhotosGallery.module.css';
import Grid from '..Grid/Grid';

const PhotosGallery = ({ images }) => {
  return (
    <>
      <Grid images={images}></Grid>
    </>
  );
};
export default PhotosGallery;

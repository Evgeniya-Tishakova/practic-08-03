import style from './PhotosGallery.module.css';

const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {[images].map(({ id }) => (
        <GridItem>
          <PhotosGalleryItem />
        </GridItem>
      ))}
    </Grid>
  );
};
export default PhotosGallery;

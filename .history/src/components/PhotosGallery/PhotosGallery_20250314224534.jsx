import style from './PhotosGallery.module.css';

const PhotosGallery = ({ images }) => {
  return (
    <>
      <Grid>
        {[].map(() => (
          <GridItem>
            <PhotosGalleryItem />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
export default PhotosGallery;

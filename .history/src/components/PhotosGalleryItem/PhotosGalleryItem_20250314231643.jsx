import css from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ id, color, likes, photographer, url }) => {
  return (
    <div
      className={css.thumb}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img src={src.large} alt={alt} />
    </div>
  );
};
export default PhotosGalleryItem;

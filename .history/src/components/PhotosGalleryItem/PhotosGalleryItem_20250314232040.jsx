import css from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ id, color, alt, src }) => {
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

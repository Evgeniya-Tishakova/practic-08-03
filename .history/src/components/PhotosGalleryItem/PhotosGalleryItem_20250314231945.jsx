import css from './PhotosGalleryItem.module.css';

const PhotosGalleryItem = ({ id, color, alt, photographer, src }) => {
  return (
    <div
      className={css.thumb}
      style={{ backgroundColor: color, borderColor: color }}
    >
      <img src={src.large} alt={alt} photographer={photographer} />
    </div>
  );
};
export default PhotosGalleryItem;

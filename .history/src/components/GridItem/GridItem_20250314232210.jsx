import css from './GridItem.module.css';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const GridItem = ({ image }) => {
  return (
    <li className={css.item} key={image.id}>
      <PhotosGalleryItem
        color={image.avg_color}
        alt={image.alt}
        src={image.src}
      />
    </li>
  );
};
export default GridItem;

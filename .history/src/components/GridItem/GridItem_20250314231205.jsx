import css from './GridItem.module.css';
import PhotosGalleryItem from '../PhotosGalleryItem/PhotosGalleryItem';

const GridItem = ({ image }) => {
  return (
    <li className={css.item} key={image.id}>
      <PhotosGalleryItem id={image.id} color={image.avg_color} />
    </li>
  );
};
export default GridItem;

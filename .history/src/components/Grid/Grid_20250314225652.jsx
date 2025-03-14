import css from './Grid.module.css';
import GridItem from '../GridItem/GridItem';

const Grid = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li className={css.item} key={image.id}>
          <GridItem id={image.id} color={image.avg_color} />
        </li>
      ))}
    </ul>
  );
};

export default Grid;

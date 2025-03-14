import css from './Grid.module.css';
import GridItem from '../GridItem/GridItem';

const Grid = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <GridItem key={image.id} image={image} />
      ))}
    </ul>
  );
};

export default Grid;

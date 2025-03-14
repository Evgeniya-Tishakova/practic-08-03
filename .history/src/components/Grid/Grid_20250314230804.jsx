import css from './Grid.module.css';
import GridItem from '../GridItem/GridItem';

const Grid = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <GridItem image={image} />
      ))}
    </ul>
  );
};

export default Grid;

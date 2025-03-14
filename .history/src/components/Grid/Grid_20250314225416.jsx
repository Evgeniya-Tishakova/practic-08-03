import css from './Grid.module.css';
import Grid from '../co';

const Grid = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li className={css.item} key={image.id}>
          <GridItem />
        </li>
      ))}
    </ul>
  );
};

export default Grid;

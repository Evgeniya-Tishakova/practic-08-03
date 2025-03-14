import css from './Grid.module.css';
const Grid = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(image => (
        <li></li>
      ))}
    </ul>
  );
};

export default Grid;

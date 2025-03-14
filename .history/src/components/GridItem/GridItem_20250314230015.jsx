import css from './GridItem.module.css'
import 

const GridItem = ({ image }) => {
  return <li className={css.item} key={image.id}></li>;
};
export default GridItem;




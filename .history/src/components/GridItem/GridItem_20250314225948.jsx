import css 


const GridItem = ({ image }) => {
  return <li className={css.item} key={image.id}></li>;
};
export default GridItem;




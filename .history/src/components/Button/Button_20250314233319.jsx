import style from './Button.module.css';

const Button = ({ images, query, onClick, disabled }) => {
  return (
    <button className={style.button} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
export default Button;

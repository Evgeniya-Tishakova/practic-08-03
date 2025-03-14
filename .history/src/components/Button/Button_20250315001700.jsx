import css from './Button.module.css';

const Button = ({ images, onClick, isLoading, disabled }) => {
  return (
    images.length > 0 &&
    isLoading && (
      <button className={css.button} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    )
  );
};
export default Button;

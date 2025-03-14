// import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleInput = event => {
    setQuery(event.target.value);
    console.log('handleInput', query);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (!query.trim()) {
      return alert('Can not be empty');
    }

    onSubmit(query);
    setQuery('');
  };

  console.log('render', query);

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;

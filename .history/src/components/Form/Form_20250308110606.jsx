// import { FiSearch } from 'react-icons/fi';
import 

const Form = ({ onSubmit }) => {

  const [query, setQuery] = useState('');
  
 const handleInput = evt => {
    setQuery(evt.)
  };

  
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({});
    evt.target.reset();
  };

  return <h2>Form</h2>
    <form className={style.form}>
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
</form>;
};

export default Form;

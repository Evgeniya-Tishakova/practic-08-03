// import { FiSearch } from 'react-icons/fi';

const Form = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit({});
    evt.target.reset();
  };

  return <h2>Form</h2>;
};

export default Form;

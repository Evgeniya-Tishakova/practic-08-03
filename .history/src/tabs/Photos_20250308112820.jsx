import { Form } from '../components/Form/Form.jsx';
import Text from '../components/Text/Text';

const Photos = () => {
  const getQuery = inputValue => {
    console.log('inputValue', inputValue);
  };

  return (
    <>
      <Form onSubmit={getQuery}></Form>
      <Text textAlign="center">Let`s begin search 🔎</Text>
    </>
  );
};

export default Photos;

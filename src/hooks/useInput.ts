import {useState} from 'react';

const useInput = (initalValue = '') => {
  const [value, setValue] = useState(initalValue);
  const handleChange = (v: any) => setValue(v);
  const reset = () => setValue('');

  return [value, handleChange, reset];
};

export default useInput;

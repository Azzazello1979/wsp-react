import { useState } from 'react';

const useInput = (valueValidatorFn) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = valueValidatorFn(enteredValue);
    const hasError = isTouched && !valueIsValid;


    const inputChangeHandler = e => {
        setEnteredValue(e.target.value);
    };
    const inputBlurHandler = () => {
        setIsTouched(true);
    };
    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    }


};

export default useInput;
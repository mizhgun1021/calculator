// let calculatorInput = '';

export const buttonAction = (button) => {
    return (dispatch, getState) => {
        let {inputValue} = getState();
        switch (button) {
            case 'C':
                inputValue = '';
                break;
            case '=':
                inputValue = eval(inputValue);
                break;
            default:
                inputValue += button;
                break
        }
        dispatch({type: 'CHANGE_INPUT_VALUE', payload: inputValue});
        console.log(inputValue );
    }
};
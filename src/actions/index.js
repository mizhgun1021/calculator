import {saveState} from '../reducers/history'

export const buttonAction = (button) => {
    return (dispatch, getState) => {
        let {inputValue} = getState();

        if(inputValue === '' && isNaN(button)){
            button = '';
        }
        if((inputValue === '' || isNaN(inputValue.slice(-1)))  && button === 0 ) {
            button = '';
        }

        switch (button) {
            case 'C':
                inputValue = '';
                break;
            case '=':
                if(!isNaN(inputValue.slice(-1))) {
                    inputValue = '' + eval(inputValue);
                }
                break;
            default:
                if(inputValue !== '' && (isNaN(inputValue.slice(-1)) && isNaN(button))) {
                    button = '';
                }

                inputValue += button;
                break
        }
        dispatch({type: 'CHANGE_INPUT_VALUE', payload: inputValue});
    }
};

export const localSave = () => {
    return (dispatch, getState) => {
        let state = getState();
        saveState(state);
    }
};
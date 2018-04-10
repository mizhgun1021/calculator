import {saveState} from '../reducers/history'

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
        console.log(inputValue);
    }
};

export const localSave = () => {
    return (dispatch, getState) => {
        let state = getState();
        saveState(state);
    }
};
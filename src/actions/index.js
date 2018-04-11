import { saveState } from "../reducers/history";

export const buttonAction = button => {
    return (dispatch, getState) => {
        let { inputValue } = getState();
        const lastSymbolNumber = isNaN(inputValue.slice(-1));

        if (inputValue === "" && isNaN(button)) {
            button = "";
        }
        if ((inputValue === "" || lastSymbolNumber) && button === 0) {
            button = "";
        }

        switch (button) {
            case "C":
                inputValue = "";
                break;
            case "=":
                if (!lastSymbolNumber) {
                    inputValue = "" + new Function("", "return " + inputValue)();
                }
                break;
            default:
                if (inputValue !== "" && (lastSymbolNumber && isNaN(button))) {
                    button = "";
                }

                inputValue += button;
                break;
        }
        dispatch({ type: "CHANGE_INPUT_VALUE", payload: inputValue });
    };
};

export const localSave = () => {
    return (dispatch, getState) => {
        const state = getState();
        saveState(state);
    };
};

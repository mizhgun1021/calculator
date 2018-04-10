const initialState = (() => {
    try {
        const serialized = localStorage.getItem('history');
        if(serialized === null) {
            return {
                inputValue: ''
            };
        }
        return JSON.parse(serialized);
    } catch (err) {
        return {
            inputValue: ''
        };
    }
})();

export default function history(state = initialState, action) {
    if (action.type === 'CHANGE_INPUT_VALUE') {
        return {
            ...state,
            inputValue:action.payload
        };
    }
    return state;
}

export const saveState = (state) => {
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem('history', serialized);
    } catch (e) {
        //ignore
    }
};
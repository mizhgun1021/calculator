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
    if (action.type === 'CHANGE_LAST_VALUE') {
        return [
            ...state,
            action.payload
        ];
    }else if (action.type === 'CHANGE_INPUT_VALUE') {
        return {
            ...state,
            inputValue:action.payload
        };
    }
    return state;
}

export const saveState = (state) => {
    // console.log(state);
    try {
        const serialized = JSON.stringify(state);
        localStorage.setItem('history', serialized);
    } catch (e) {
        //ignore
    }
};
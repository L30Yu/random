/**
 * Generate a new array of numbers from min to max
 * @param {Number} min 
 * @param {Number} max 
*/
export function newArray(min, max) {
    let array = [];
    for (let i = min; i <= max; i++) {
        array[i - min] = i;
    }
    return array;
}

/**
 * Check the text input
 * @param {String} input 
 * @param {String} key 
 */
export function checkInput(state, input, key) {
    state.textField[key].value = parseInt(input, 10);
    if (!isNaN(input)) {
        if (input !== '') {
            checkOtherInput(state, key);
        } else {
            state.textField[key].errorText = 'Required.';
            state.valid = false;
        }
    } else {
        state.textField[key].errorText = 'Number required.';
        state.valid = false;
    }
    return state;
}

/**
 * Check the other input text
 * @param {String} state 
 * @param {String} key 
 */
function checkOtherInput(state, key) {
    let theOther = key === 'min' ? 'max' : 'min';
    const otherInput = state.textField[theOther].value;
    if (!isNaN(otherInput)) {
        if (otherInput !== '') {
            if (state.textField['min'].value < state.textField['max'].value) {
                state.textField['min'].errorText = '';
                state.textField['max'].errorText = '';
                state.valid = true;
            } else {
                state.textField[key].errorText = key === 'min' ? 'Must be less than max.' : 'Must be greater than min.';
                state.valid = false;
            }
        } else {
            state.textField[key].errorText = '';
            state.valid = false;
        }
    } else {
        state.textField[key].errorText = '';
        state.valid = false;
    }
}

/**
 * Shuffle the array to radomlize the order
 * @param {Array} array 
 */
export function shuffle(array) {
    let currIndex = array.length,
        tmpValue,
        randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currIndex) {
        // Pick a remaining element
        randomIndex = Math.floor(Math.random() * currIndex);
        currIndex--;

        tmpValue = array[currIndex];
        array[currIndex] = array[randomIndex];
        array[randomIndex] = tmpValue;
    }
    return array;
}

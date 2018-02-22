import { shuffle, newArray, checkInput } from '../utils/randomNumberUtils'

test('newArray', () => {
    let array = newArray(1, 3);
    let expectArray = [1, 2, 3];
    expect(array.length).toHaveLength(3);
    expect(array).toMatchObject(expectArray);
});

test('shuffle', () => {
    let array = [1, 2, 3];
    let expectArray = shuffle([1, 2, 3]);
    expect(array.length).toHaveLength(3);
    expect(array).toMatchObject(expectArray);
});

test('checkInput', () => {
    const state = {
        textField: {
          min: {
            errorText: '',
            value: 1,
          },
          max: {
            errorText: '',
            value: 10,
          },
        },
        valid: true,
      };
    let key = 'min';
    let input = 'aa';
    let result = checkInput({...state}, input, key);
    expect(result.textField[key].errorText).toBe('Number required.');
    expect(result.textField[key].valid).toBe(false);

    key = 'max';
    input = '';
    result = checkInput({...state}, input, key);
    expect(result.textField[key].errorText).toBe('Required.');
    expect(result.textField[key].valid).toBe(false);
    
    key = 'min';
    input = '11';
    result = checkInput({...state}, input, key);
    expect(result.textField[key].errorText).toBe('Must be less than max.');
    expect(result.textField[key].valid).toBe(false);

    key = 'max';
    input = '-11';
    result = checkInput({...state}, input, key);
    expect(result.textField[key].errorText).toBe('Must be greater than min.');
    expect(result.textField[key].valid).toBe(false);

    key = 'min';
    input = '10';
    result = checkInput({...state}, input, key);
    expect(result.textField[key].errorText).toBe('Must be less than max.');
    expect(result.textField[key].valid).toBe(false);

    key = 'min';
    input = '9';
    result = checkInput({...state}, input, key);
    expect(result.textField[key].errorText).toBe('');
    expect(result.textField[key].valid).toBe(true);
});

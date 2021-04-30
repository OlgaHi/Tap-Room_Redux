import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {

  let action;
    const kegData = {
    name: 'Mezquita',
    brand: 'Alhabra',
    price: 5,
    abv: "4%",
    pintsLeft: 24,
    id: 1
  };

  const currentState = {
    1: {name: 'Mezquita',
      brand: 'Alhabra',
      price: 5,
      abv: "4%",
      pintsLeft: 24,
      id: 1 },
    2: {name: 'Old Fashion',
      brand: 'Alhabra',
      price: 4,
      abv: "4%",
      pintsLeft: 24,
      id: 2}
  }

  test('Should return default state if there is no action type passed into the reducer', () => {

    expect(kegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, abv, pintsLeft, id } = kegData;
    action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      pintsLeft: pintsLeft,
      id: id
    };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        pintsLeft: pintsLeft,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: 'DELETE_KEG',
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {name: 'Old Fashion',
        brand: 'Alhabra',
        price: 4,
        abv: "4%",
        pintsLeft: 24,
        id: 2}
    });
  });

});
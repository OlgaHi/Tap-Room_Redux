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

});
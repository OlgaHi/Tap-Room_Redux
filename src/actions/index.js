import * as c from './ActionTypes';

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addKeg = (keg) => {
  const { name, brand, price, abv, pintsLeft, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    pintsLeft: pintsLeft,
    id: id
  };
};
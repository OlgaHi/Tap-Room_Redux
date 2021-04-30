export default (state = {}, action) => {
  const { name, brand, price, abv, pintsLeft, id } = action;
  switch (action.type) {
  case 'ADD_KEG':
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        pintsLeft: pintsLeft,
        id: id
      }
    });
  case 'DELETE_KEG':
    let newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};
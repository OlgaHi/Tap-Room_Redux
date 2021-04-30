import * as actions from './../../actions';

describe('help keg actions', () => {

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Mezquita', brand: 'Alhabra', price: 5, abv:"4%", pintsLeft: 24, id: 1})).toEqual({
      name: 'Mezquita',
      brand: 'Alhabra',
      price: 5,
      abv: "4%",
      pintsLeft: 24,
      id: 1
    });
  });

});
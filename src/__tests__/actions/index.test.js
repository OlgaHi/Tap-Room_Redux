import * as actions from './../../actions';
import * as c from '../../actions/ActionTypes';

describe('help keg actions', () => {

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Mezquita', brand: 'Alhabra', price: 5, abv:"4%", pintsLeft: 24, id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'Mezquita',
      brand: 'Alhabra',
      price: 5,
      abv: "4%",
      pintsLeft: 24,
      id: 1
    });
  });

  it("editKeg should create EDIT_KEG action", () => {
    expect(actions.editKeg()).toEqual({ type: c.EDIT_KEG });
  });
});
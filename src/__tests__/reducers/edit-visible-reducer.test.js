import editVisibleReducer from "../../reducers/edit-visible-reducer";
import * as c from "../../actions/ActionTypes";

describe("editVisibleReducer", () => {
  test("Should return default state if no action type is recognized", () => {
    expect(editVisibleReducer(false, { type: null })).toEqual(false);
  });

  test("Should toggle editing state to true", () => {
    expect(editVisibleReducer(false, { type: c.EDIT_KEG })).toEqual(true);
  });
});
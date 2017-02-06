import { List, Map } from 'immutable';
import Board from 'models/board';

const initialState = new Map({
  boards: new List([
    new Board({ id: 1, name: 'Board 1' }),
    new Board({ id: 2, name: 'Board 2' }),
    new Board({ id: 3, name: 'Board 3' }),
  ]),
});

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

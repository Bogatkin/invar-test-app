import { List, Map } from 'immutable';
import Board from 'models/board';
import BoardItem from 'models/boardItem';

const initialState = new Map({
  boards: new List([
    new Board({
      id: 1,
      name: 'Board 1',
      items: new List([
        new BoardItem({ top: 100, left: 200, color: BoardItem.getRandomColor(), type: 'box' }),
        new BoardItem({ top: 300, left: 200, color: BoardItem.getRandomColor(), type: 'circle' }),
      ]),
    }),
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

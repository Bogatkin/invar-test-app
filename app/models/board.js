import { Record, List } from 'immutable';

const Board = new Record({
  id: null,
  name: null,
  items: new List(),
});

export default Board;

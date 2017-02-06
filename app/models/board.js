import { Record, List } from 'immutable';

const Board = new Record({
  id: null,
  name: null,
  elements: new List(),
});

export default Board;

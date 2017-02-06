import { List, Map } from 'immutable';
import Board from 'models/board';
import BoardItem from 'models/boardItem';
import _ from 'lodash';

const initialState = new Map({
  boards: new List([
    new Board({
      id: 1,
      name: 'Board 1',
      items: new List([
        new BoardItem({ id: _.uniqueId('boardItem'), top: 100, left: 200, color: BoardItem.getRandomColor(), type: 'box' }),
        new BoardItem({ id: _.uniqueId('boardItem'), top: 300, left: 200, color: BoardItem.getRandomColor(), type: 'circle' }),
      ]),
    }),
    new Board({ id: 2, name: 'Board 2' }),
    new Board({ id: 3, name: 'Board 3' }),
  ]),
});


export default function (state = initialState, action) {
  let newState;
  let board;
  let boardIndex;
  let boardItems;
  let boardItemIndex;

  switch (action.type) {
    case 'MOVE_BOARD_ITEM':
      // ух как я люблю сложные операции с immutable
      // находим индекс доски, вытаскиваем саму доску
      boardIndex = state.get('boards').findIndex((item) => (item.id === action.boardId));
      board = state.get('boards').find((item) => (item.id === action.boardId));

      // вытаскиваем коллекцию итемов доски
      boardItems = board.items;
      // находим индекс нужного элемента
      boardItemIndex = boardItems.findIndex((item) => item.get('id') === action.boardItemId);

      // обновляем элемент по получившемуся пути
      newState = state.setIn(['boards', boardIndex, 'items', boardItemIndex, 'top'], action.position.top);
      newState = newState.setIn(['boards', boardIndex, 'items', boardItemIndex, 'left'], action.position.left);
      return newState;
    default:
      return state;
  }
}

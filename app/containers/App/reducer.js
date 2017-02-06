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
  let newState;
  let board;
  let boardIndex;
  let boardItems;
  let boardItemIndex;

  switch (action.type) {
    case 'ADD_BOARD_ITEM':
      boardIndex = state.get('boards').findIndex((item) => (item.id === action.boardId));
      newState = state.updateIn(['boards', boardIndex, 'items'], (items) => items.push(action.boardItem));
      return newState;

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

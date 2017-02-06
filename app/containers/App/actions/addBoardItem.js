export default function (boardId, boardItem) {
  return {
    type: 'ADD_BOARD_ITEM',
    boardId,
    boardItem,
  };
}

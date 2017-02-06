export default function (boardId, boardItemId, position) {
  return {
    type: 'MOVE_BOARD_ITEM',
    boardId,
    boardItemId,
    position,
  };
}

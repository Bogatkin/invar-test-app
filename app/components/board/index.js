import React from 'react';
import BoardItem from './item';

function Board(props) {
  const { board } = props;

  return (
    <div className="box b-board">
      {board.items.map((item, i) => (
        <BoardItem item={item} key={i} />
      ))}
    </div>
  );
}

Board.propTypes = {
  board: React.PropTypes.object.isRequired,
};

export default Board;

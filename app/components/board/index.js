import React from 'react';
import { DropTarget } from 'react-dnd';

import BoardItem from './item';

const DnDSpec = {
  drop(props, monitor) {
    const item = monitor.getItem();
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);

    if (left < 0 || top < 0) {
      // remove item if out of borders
      return undefined;
    }

    props.changeItemPosition(props.board, item, { left, top });
    return { board: props.board };
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}


class Board extends React.PureComponent {
  static propTypes = {
    board: React.PropTypes.object.isRequired,
    changeItemPosition: React.PropTypes.func.isRequired,
    removeItem: React.PropTypes.func.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
  };

  render() {
    const { board, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="box b-board">
        {board.items.map((item, i) => (
          <BoardItem
            key={i}
            item={item}
            onPositionChange={this.props.changeItemPosition}
            onRemove={this.props.removeItem}
          />
        ))}
      </div>
    );
  }
}

export default DropTarget('BOARD_ITEM', DnDSpec, collect)(Board);

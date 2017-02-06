import React from 'react';
import _ from 'lodash';
import { DropTarget } from 'react-dnd';

import BoardItemRecord from 'models/boardItem';

import BoardItem from './item';

const DnDSpec = {
  drop(props, monitor, component) {
    const item = monitor.getItem();

    // если item не существует, то создаем его
    if (_.isNil(item.id)) {
      // получаем положение элемента и положение доски, чтобы посчитать относительное положение
      const itemPosition = monitor.getClientOffset();
      const boardPosition = component.DOMNode.getBoundingClientRect();

      const boardItem = new BoardItemRecord({
        id: _.uniqueId('boardItem'),
        type: item.type,
        color: BoardItemRecord.getRandomColor(),
        top: Math.round(itemPosition.y - boardPosition.top - 75), // -75 чтобы красивее размещалось, по центру от мыши
        left: Math.round(itemPosition.x - boardPosition.left - 75),
      });

      // если элемент не попал в board, то удаляем
      if (boardItem.top < 0 || boardItem.left < 0) {
        return undefined;
      }

      props.addItem(props.board, boardItem);
      return { board: props.board };
    }

    // если item существует, то изменяем его положение
    const delta = monitor.getDifferenceFromInitialOffset();
    const left = Math.round(item.left + delta.x);
    const top = Math.round(item.top + delta.y);


    // если item находится за границами, удаляем его
    if (left < 0 || top < 0) {
      return undefined;
    }

    props.changeItemPosition(props.board, item, { left, top });
    return { board: props.board };
  },
};

function collect(connect) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}


class Board extends React.PureComponent {
  static propTypes = {
    board: React.PropTypes.object.isRequired,
    // addItem: React.PropTypes.func.isRequired,
    changeItemPosition: React.PropTypes.func.isRequired,
    removeItem: React.PropTypes.func.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
  };

  render() {
    const { board, connectDropTarget } = this.props;

    return connectDropTarget(
      <div className="box b-board" ref={(node) => { this.DOMNode = node; }}>
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

export default DropTarget(['BOARD_ITEM', 'MENU_ITEM'], DnDSpec, collect)(Board);

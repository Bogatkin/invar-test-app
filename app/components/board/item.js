import React from 'react';
import { DragSource } from 'react-dnd';

class BoardItem extends React.Component {
  static propTypes = {
    item: React.PropTypes.object.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
  };

  render() {
    const { isDragging, connectDragSource, item } = this.props;

    return connectDragSource(
      <div
        className={`b-board__item b-board__item--${item.type}`}
        style={{
          background: item.color,
          top: item.top,
          left: item.left,
          opacity: isDragging ? 0.5 : 1,
        }}
      />
    );
  }
}

const dndSpec = {
  beginDrag(props) {
    return props.item.toJS();
  },

  endDrag(props, monitor) {
    const dropResult = monitor.getDropResult();
    if (!dropResult) {
      props.onRemove(props.item);
    }
  },
};


function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

export default DragSource('BOARD_ITEM', dndSpec, collect)(BoardItem);
// export default BoardItem;

import React from 'react';
import { DragSource } from 'react-dnd';

function MenuItem(props) {
  return props.connectDragSource(
    <li>
      <a className="b-menu__link">
        <span><i className={`b-menu__icon b-menu__icon--${props.type}`} /></span>
        <span>{props.typeName}</span>
      </a>
    </li>
  );
}

MenuItem.propTypes = {
  type: React.PropTypes.string.isRequired,
  typeName: React.PropTypes.string.isRequired,
  connectDragSource: React.PropTypes.func,
};

const dndSpec = {
  beginDrag(props) {
    return { type: props.type };
  },
};


function collect(connect) {
  return {
    connectDragSource: connect.dragSource(),
  };
}

export default DragSource('MENU_ITEM', dndSpec, collect)(MenuItem);

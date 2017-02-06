import React from 'react';

function BoardItem(props) {
  const { item } = props;

  return (
    <div
      className={`b-board__item b-board__item--${item.type}`}
      style={{
        background: item.color,
        top: item.top,
        left: item.left,
      }}
    />
  );
}

BoardItem.propTypes = {
  item: React.PropTypes.object.isRequired,
};

export default BoardItem;

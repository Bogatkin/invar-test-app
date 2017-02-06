import React from 'react';
import renderer from 'react-test-renderer';

import BoardRecord from 'models/board';
import BoardItemRecord from 'models/boardItem';
import { List } from 'immutable';

import Board from '../index';

describe('<Board />', () => {
  it('renders correctly', () => {
    const testBoard = new BoardRecord({
      id: 1,
      name: 'Board 1',
      items: new List([
        new BoardItemRecord({ top: 100, left: 200, color: '#ff0000', type: 'box' }),
        new BoardItemRecord({ top: 300, left: 200, color: '#ffff00', type: 'circle' }),
      ]),
    });

    const OriginalBoard = Board.DecoratedComponent;
    const identity = (el) => el;

    // TODO: update test
    const tree = renderer.create(
      <OriginalBoard
        board={testBoard}
        connectDropTarget={identity}
        changeItemPosition={identity}
        removeItem={identity}
      />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

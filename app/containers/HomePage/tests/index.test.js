import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import { Map, List } from 'immutable';
import Board from 'models/board';

import HomePage from '../index';

const storeData = new Map({
  app: new Map({
    boards: new List([
      new Board({ id: 1, name: 'Test board 1' }),
      new Board({ id: 2, name: 'Test board 2' }),
    ]),
  }),
});
const mockStore = configureMockStore();

let store;

describe('<Nav />', () => {
  beforeEach(() => {
    store = mockStore(storeData);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<HomePage
      store={store}
      params={{ boardId: 1 }}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

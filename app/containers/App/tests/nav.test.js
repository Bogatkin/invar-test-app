import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';

import { Map, List } from 'immutable';
import Board from 'models/board';

import Nav from '../elements/nav';

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
    const tree = renderer.create(<Nav store={store} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

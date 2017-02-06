/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import moveBoardItem from 'containers/App/actions/moveBoardItem';
import addBoardItem from 'containers/App/actions/addBoardItem';

import Menu from 'components/menu';
import Board from 'components/board';

class HomePage extends React.Component {

  static propTypes = {
    boards: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
    moveBoardItem: React.PropTypes.func.isRequired,
    addBoardItem: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.getCurrentBoard = ::this.getCurrentBoard;
    this.addItem = ::this.addItem;
    this.changeItemPosition = ::this.changeItemPosition;
    this.removeItem = ::this.removeItem;
  }


  getCurrentBoard() {
    return this.props.boards.find((item) => (
      item.id === parseInt(this.props.params.boardId, 10)
    ));
  }

  addItem(board, item) {
    this.props.addBoardItem(board.id, item);
  }

  changeItemPosition(board, item, position) {
    this.props.moveBoardItem(board.id, item.id, position);
  }

  removeItem(item) {
    // я хотел сделать удаление при перемещении элемента за границу board, но потом решил что не стоит.
    return item;
  }

  render() {
    const board = this.getCurrentBoard();

    return (
      <div className="columns">
        <div className="column is-2">
          <Menu />
        </div>
        <div className="column">
          <div className="b-page">
            <h1 className="title">{board.name}</h1>
            <Board
              board={board}
              addItem={this.addItem}
              changeItemPosition={this.changeItemPosition}
              removeItem={this.removeItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

const HomePageDnd = DragDropContext(HTML5Backend)(HomePage);

export default connect(
  (state) => ({
    boards: state.get('app').get('boards'),
  }),
  (dispatch) => bindActionCreators({
    moveBoardItem,
    addBoardItem,
  }, dispatch)

)(HomePageDnd);

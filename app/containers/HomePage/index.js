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

import Board from 'components/board';

class HomePage extends React.Component {

  static propTypes = {
    boards: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired,
  };

  getCurrentBoard() {
    return this.props.boards.find((item) => (
      item.id === parseInt(this.props.params.boardId, 10)
    ));
  }

  render() {
    const board = this.getCurrentBoard();

    return (
      <div className="b-page">
        <h1 className="title">{board.name}</h1>
        <Board board={board} />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    boards: state.get('app').get('boards'),
  }),
  (dispatch) => bindActionCreators({
    //
  }, dispatch)

)(HomePage);

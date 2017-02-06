import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

export class Nav extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    boards: React.PropTypes.object.isRequired,
  };

  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            {this.props.boards.map((board, i) => (
              <Link
                to={`/boards/${board.id}`}
                className="nav-item is-tab is-hidden-mobile"
                activeClassName="is-active"
                key={i}
              >
                {board.name}
              </Link>
            ))}
          </div>
          <span className="nav-toggle"><span /><span /><span /></span>
        </div>
      </nav>
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
)(Nav);

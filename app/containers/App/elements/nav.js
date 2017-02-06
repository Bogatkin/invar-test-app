import React from 'react';

export default class Nav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <nav className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <a className="nav-item is-tab is-hidden-mobile is-active">Board 1</a>
            <a className="nav-item is-tab is-hidden-mobile">Board 2</a>
            <a className="nav-item is-tab is-hidden-mobile">Board 3</a>
          </div>
          <span className="nav-toggle"><span /><span /><span /></span>
        </div>
      </nav>
    );
  }
}


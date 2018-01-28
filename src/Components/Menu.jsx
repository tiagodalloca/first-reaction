import React, {
  Component
} from 'react';

import {
  Link
} from 'react-router-dom'

import classNames from 'classnames';

import '../styles/Menu.css';

class MenuButton extends Component{
  render() {
    return (
      <li className="nav-item"
          onClick={this.props.onClick}>
        <Link className={classNames("nav-link", {
            active: this.props.active
          })}
          to={this.props.link}>{this.props.label}</Link>
      </li>
    );
  }
}

class Menu extends Component {
  constructor(things) {
    super(things);
    this.buttons =
    [ ["/", "Home"],
      ["/Map", "Map"],
      ["/Cars", "Cars"],
      ["/About", "About"]];
    this.state = {activeButton: 0};
  }

  handleButtonClick(i) {
    this.setState({activeButton: i});
  }

  render() {
    return (
      <div className="Menu">
        <ul className="nav nav-pills">
         {this.buttons.map((button, i) => {
          if (i === this.state.activeButton)
            return (<MenuButton key={i}
                                link={this.buttons[i][0]}
                                label={this.buttons[i][1]} active={true}
                                onClick={() => this.handleButtonClick(i)}/>);
          return (<MenuButton key={i}
                              link={this.buttons[i][0]}
                              label={this.buttons[i][1]} active={false}
                              onClick={() => this.handleButtonClick(i)}/>);
         })}
       </ul>
    </div>
    );
  }
}

export default Menu

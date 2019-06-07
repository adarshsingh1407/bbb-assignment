import React, {Component} from 'react';
import LABELS from '../i18n/labels';
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (<div className="top-bar">
      <div className="top-bar-left">
        <ul className="dropdown menu">
          <li className="menu-text">
            <Link to="/" style={{color: 'black'}} activeStyle={{color: 'red'}}>
              {LABELS.PRODUCT_NAME}
            </Link>
          </li>
        </ul>
      </div>
      </div>
      );
      }

}

export default Header;

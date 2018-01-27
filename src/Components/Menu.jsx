import React, {
  Component
} from 'react';
import '../styles/Menu.css';

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <ul className="nav nav-pills">
         <li class="nav-item">
           <a class="nav-link active" href="#">Item</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Item 2</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Item 3</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="#">Item 4</a>
         </li>
       </ul>
    </div>
    );
  }
}

export default Menu

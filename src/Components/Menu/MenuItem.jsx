import React from 'react';
import {NavLink} from 'react-router-dom';

const MenuItems = () => {
    return(
        <ul className="right">
        <li><NavLink to="/"> News </NavLink> </li>
        <li><NavLink to="/"> Songs </NavLink> </li>
        <li><NavLink to="/"> Contacts </NavLink> </li>
        </ul>
    )
}
export default MenuItems;
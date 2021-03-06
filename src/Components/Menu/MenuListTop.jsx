import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNote from '@material-ui/icons/MusicNote'; 
import {Link} from 'react-router-dom';
 

function MenuTop(props, router){

     return(
<MenuList>
          <MenuItem
           component={Link} 
           to="/">
           {<ListItemIcon>
            <MusicNote />
        </ListItemIcon>}
          
          <ListItemText insert primary="Музыка"/> 
          </MenuItem>
          <MenuItem
          component={Link}
          to="/NotFound"
          >
          <ListItemIcon>
              <MusicNote />
          </ListItemIcon>
          <ListItemText insert primary="Песни"/>
          </MenuItem>
          <MenuItem
          component={Link}
          to="/NotFound"
          >
          <ListItemIcon>
              <MusicNote />
          </ListItemIcon>
          <ListItemText insert primary="Плейлисты"/>
          </MenuItem>
          <MenuItem
          component = {Link}
          to = "/LikeSong"
          >
          <ListItemIcon>
              <MusicNote />
          </ListItemIcon>
          <ListItemText insert primary="Понравившееся"/>
          </MenuItem>
        </MenuList>
     );
}
MenuTop.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default (MenuTop);
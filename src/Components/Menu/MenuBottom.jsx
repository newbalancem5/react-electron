import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MusicNote from '@material-ui/icons/MusicNote'; 


function MenuBottom(props){
     const {classes} = props;

     return(
<MenuList>
          <MenuItem>
          <ListItemIcon>
              <MusicNote />
          </ListItemIcon>
          <ListItemText insert primary="Музыка">
          </ListItemText>
          
          </MenuItem>
          <MenuItem>
          <ListItemIcon>
              <MusicNote />
          </ListItemIcon>
          <ListItemText insert primary="Песни">
          </ListItemText>
          </MenuItem>
          <MenuItem>
          <ListItemIcon>
              <MusicNote />
          </ListItemIcon>
          <ListItemText insert primary="Плейлисты">
          </ListItemText>
          </MenuItem>
          <MenuItem>
          <ListItemIcon>
              <MusicNote />
          </ListItemIcon>
          <ListItemText insert primary="Понравившееся">
          </ListItemText>
          </MenuItem>
        </MenuList>
     );
}
MenuBottom.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default (MenuBottom);
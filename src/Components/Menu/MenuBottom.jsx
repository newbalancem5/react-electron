import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitIcon from '@material-ui/icons/ExitToApp';
import {Link} from 'react-router-dom';





function MenuBottom(props, router){
     //const {classes} = props;

     return(       

             <MenuList>
         <MenuItem 
         component={Link} 
         to="/Settings">
         {<ListItemIcon>
          <SettingsIcon />
          </ListItemIcon>
         }                          
         <ListItemText insert primary="Настройки"/>          
         </MenuItem>
         <MenuItem component={Link} to="/Quit">
         <ListItemIcon>
             <ExitIcon />
         </ListItemIcon>
         <ListItemText insert primary="Выход"/>          
         </MenuItem>          
       </MenuList>        

     );
}
MenuBottom.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default (MenuBottom);
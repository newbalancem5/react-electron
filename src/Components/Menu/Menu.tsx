import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MainMusic from './MainMusic';
//import Player from '../Player/Player';
// import DayMusic from './DayMusic';
import MenuTop from'./MenuListTop';
import MennuBottom from './MenuBottom';
import {Route, Switch} from 'react-router-dom';
import Settings from '../Setting/Settings';
import NewPlaylis from '../Music/NewPlaylist';
import Song from '../Music/Song';
import LikeSong from '../Music/LikeSong'
import MenuSearchBar from './MenuSearchBar';

// import Music from './Music'
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#e57373',
    
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

function MenuSongPlayer(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ReactElectronMusic
          </Typography>
           <MenuSearchBar/>
        </Toolbar>        
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} >
        <Typography>Logo</Typography>
        </div>

        <Divider />     
        <MenuTop />     
        <Divider />     
        <Divider />        
        < MennuBottom/>
        <Divider />     
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
        <Switch>
        {/* <Route path='/NewPlaylist' component={Newplaylist}>  */}
        <Route path='/Index' />
        <Route path='/Likesong' component={LikeSong}/>
        <Route path='/Song' component={Song}/>
        <Route path ='/NewPlaylist' component={NewPlaylis}/>
        <Route path='/Settings' component={Settings}/>
        <MainMusic/>
        </Switch>
        </Typography>
        <Typography paragraph>
         {/* {<Player / >} */}
        </Typography>
      </main>
    </div>
  );
}

MenuSongPlayer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuSongPlayer);
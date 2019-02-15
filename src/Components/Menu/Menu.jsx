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
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
//import Player from '../Player/Player';
// import DayMusic from './DayMusic';
import MenuTop from'./MenuListTop';
import MennuBottom from './MenuBottom';
import {Route, Switch} from 'react-router-dom';
import Settings from '../Setting/Settings';
import NewPlaylis from '../Music/NewPlaylist';
import Song from '../Music/Song';
import LikeSong from '../Music/LikeSong'

// import Music from './Music'
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    // background-color: #906565,
    
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },            
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
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Искать..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
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
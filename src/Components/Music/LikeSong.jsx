import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MusicPanel from '../MusicPanel/MusicPanel'



const styles = theme => ({
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });


function LikeSong(props){    
    const {classes} = props;
    

    return(
        <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            
          </Grid>
        <Grid container spacing={24}>
        <Grid item xs={12}>
        {/* <VideoList/> */}
        </Grid>
        </Grid>

          <Grid item xs={6}>
          <MusicPanel/>
          </Grid>
          <Grid item xs={6}>
          <MusicPanel/>
          </Grid>
          <Grid item xs={6}>
          <MusicPanel/>
          </Grid>
          <Grid item xs={6}>
          <MusicPanel/>
          </Grid>
          <Grid item xs={6}>
          <MusicPanel/>
          </Grid>
          <Grid item xs={6}>
           <MusicPanel/>
          </Grid>
        </Grid>
      </div>

    )
}
LikeSong.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

export default withStyles(styles, { withTheme: true }) (LikeSong); 


















 

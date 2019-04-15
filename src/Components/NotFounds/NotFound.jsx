import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

//import { TouchBarColorPicker } from 'electron';

const styles = theme => ({
  root: {
    flexGrow: 1,   
  },
  ErrorPage:{
    
  },
});

function NotFound (props) {
  const { classes } = props;

  return (
    <div className={classes.ErrorPage}>
      <Grid container spacing={24}>
      <Grid item xs={12}         
       container
       direction="column"
       justify="flex-end"
      alignItems="center">
        <Typography 
        component="h2"        
        variant="h3" gutterCenter>
        404
      </Typography>          
        </Grid>
        <Grid item xs={6}>
        <Typography variant="subtitle1" gutterBottom>
            Она где-то там в облоках вон там в облоках летает, но обещала вернуться
          </Typography> 
        </Grid>
      </Grid>
    </div>
  );
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotFound);
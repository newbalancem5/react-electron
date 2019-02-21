import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
 
});

function NotFound(props) {
  const { classes } = props;

  return (
    <div className={classes.root}
    >
    <CardMedia
          className={classes.media}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
      <Grid container spacing={24}>
      <Grid
         item xs={12}         
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
            Ой.... Кажется мы потеряли страничку=((
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
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { FormGroup } from '@material-ui/core';

const data = {
  post:{
    id:123,
    content:
    "Какую музыку ты любишь",
    song_name: "@namesong"
  },
    comments: [ {
      id: 1,
      content:"Песня",
      song_name: "@namesong",
      number: "@number",
    },
    {
      id: 2,
      content:"Песня №",
      song_name: "Название песни",
      number: "номер песни",
    },
    {
      id: 3,
      content: "Песня №3",
      song_name: "@namesong3",
      number: "@number_song3",
    },
    {
      id: 4,
      content: "Песня №4 ",
      song_name: "@namesong4",
      number: "@number_song",
    }
  ]
  };


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

function Song(props){
    const {classes} = props;

    return(
        <div className={classes.root}>
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
        Песни
      </Typography>
        </Grid>
          <Grid item xs={6}>
           <h1>{props.id},  {props.song_name}</h1>
          </Grid>
          <Grid item xs={6}>
            {props.content}
          </Grid>
          <Grid container wrap="nowrap" spacing={24}>
          <Grid item xs={3}>
          <FormGroup row>
          <Typography>
            Текст 2
          </Typography>
          </FormGroup>
          </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={24}>
          <Grid item xs={3}>
          <FormGroup row>
          <Typography>
            Текст 3
          </Typography>
          </FormGroup>
          </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={24}>
          <Grid item xs={3}>
          <FormGroup row>
          <Typography>
            Текст 4
          </Typography>
          </FormGroup>
          </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={24}>
          <Grid item xs={3}>
          <FormGroup row>
          <Typography>
            Текст 5
          </Typography>
          </FormGroup>
          </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={24}>
          <Grid item xs={3}>
          <FormGroup row>
          <Typography>
            Текст 6
          </Typography>
          </FormGroup>
          </Grid>
          </Grid>
          <Grid container wrap="nowrap" spacing={24}>
          <Grid item xs={3}>
          <FormGroup row>
          <Typography>
            Текст 7
          </Typography>
          </FormGroup>
          </Grid>
          </Grid>
        </Grid>
      </div>

    )
}
Song.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles,data) (Song); 
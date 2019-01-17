import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Add';

const styles = theme => ({
  colorSwitchBase: {
    color: red,
    '&$colorChecked': {
      color: red[400],
      '& + $colorBar': {
        backgroundColor: red[100],
      },
    },
  },
  colorBar: {},
  colorChecked: {},
  iOSSwitchBase: {
    '&$iOSChecked': {
      color: theme.palette.common.white,
      '& + $iOSBar': {
        backgroundColor: '#52d869',
      },
    },
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.sharp,
    }),
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },  
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
  },
});

class Setting extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div>      
        <Grid
         item xs={12}         
  container
  direction="column"
  justify="flex-end"
  alignItems="center">
        <Typography 
        component="h2"        
        variant="h3" gutterCenter>
        Настройки
      </Typography>
        </Grid>
        <Grid container spacing={40}>
        <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
            Высокое качество:
          </Typography> 
        </Grid>
        <Grid item xs={3}>
        <FormGroup row>      
      <FormControlLabel
        control={           
          <Switch
            checked={this.state.checkedA}
            onChange={this.handleChange('checkedA')}
            value="checkedA"
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
          />            
        }
        label="Включить"
      />        
    </FormGroup>
        </Grid>  
        </Grid>
        <Divider className={classes.divider} />  
        <Grid container spacing={24}>
        <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
            Ночная тема:
          </Typography> 
        </Grid>
        <Grid item xs={3}>
        <FormGroup row>      
      <FormControlLabel
        control={           
          <Switch
            checked={this.state.checkedHighQuality}
            onChange={this.handleChange('checkedHighQuality')}
            value="checkedHighQuality"
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
          />            
        }
        label="Включить"
      />        
    </FormGroup>
        </Grid>
        </Grid>
        <Divider className={classes.divider} />  
        <Grid container spacing={24}>
        <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
            Ставить стандартный уровень громкости:
          </Typography> 
        </Grid>
        <Grid item xs={3}>
        <FormGroup row>      
      <FormControlLabel
        control={           
          <Switch
            checked={this.state.checkedHighQuality}
            onChange={this.handleChange('checkedHighQuality')}
            value="checkedHighQuality"
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
          />            
        }
        label="Включить"
      />        
    </FormGroup>
        </Grid>
        </Grid>
        <Divider className={classes.divider} />  
        <Grid container wrap="nowrap" spacing={24}>
         <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
            Автоматически составлять новый плейлист:
          </Typography> 
        </Grid>
        <Grid item xs={3}>
        <FormGroup row>      
      <FormControlLabel
        control={           
          <Switch
            checked={this.state.checkedHighQuality}
            onChange={this.handleChange('checkedHighQuality')}
            value="checkedHighQuality"
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
          />            
        }
        label="Включить"
      />        
    </FormGroup>
        </Grid> 
         </Grid>  
         <Divider className={classes.divider} />  
         <Grid container wrap="nowrap" spacing={24}>
         <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
            Приватная сессия
          </Typography> 
        </Grid>
        <Grid item xs={3}>
        <FormGroup row>      
      <FormControlLabel
        control={           
          <Switch
            checked={this.state.checkedHighQuality}
            onChange={this.handleChange('checkedHighQuality')}
            value="checkedHighQuality"
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
          />            
        }
        label="Включить"
      />        
    </FormGroup>
        </Grid> 
         </Grid> 
         <Divider className={classes.divider} />  
         <Grid container wrap="nowrap" spacing={24}>
         <Grid item xs={3}>
        <Typography variant="subtitle1" gutterBottom>
            Показывать моих любимых исполнителей:
          </Typography> 
        </Grid>
        <Grid item xs={3}>
        <FormGroup row>      
      <FormControlLabel
        control={           
          <Switch
            checked={this.state.checkedHighQuality}
            onChange={this.handleChange('checkedHighQuality')}
            value="checkedHighQuality"
            classes={{
              switchBase: classes.colorSwitchBase,
              checked: classes.colorChecked,
              bar: classes.colorBar,
            }}
          />            
        }
        label="Включить"
      />        
    </FormGroup>
        </Grid> 
         </Grid> 
         <Grid
          container wrap="nowrap"
          
  direction="column"
  justify="flex-end"
  alignItems="center"
           spacing={24}>
         <Fab variant="extended" color="red" aria-label="Add" className={classes.margin}>
<NavigationIcon className={classes.extendedIcon} />
Сохранить
</Fab> 
         </Grid>
        </div>         
     
    );
  }
}

Setting.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Setting);

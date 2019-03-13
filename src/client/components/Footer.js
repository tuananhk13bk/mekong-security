import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';

import { TODAY_YEAR } from '../constants/today'

const styles = theme => ({
  root: {
    // marginTop: 40,
    // marginBottom: theme.spacing.unit * 2
  },
  text: {
    textAlign: 'right'
  }
})

const Footer = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Typography className={classes.text}>
        {`Copyright @ ${TODAY_YEAR}, Create by PTT Company`}
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Footer);
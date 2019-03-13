import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
// import icons
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  addFab: {
    margin: theme.spacing.unit * 2,
  },
  toolTipContainer: {
    marginLeft: 'auto'
  }
})

const ReassignTooltip = ({ classes }) => {
  return (
    <div className={classes.toolTipContainer}>
      <Tooltip title="Cấp thẻ mới" aria-label="Add">
        <Fab color="primary" className={classes.addFab} size="small">
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default withStyles(styles)(ReassignTooltip);
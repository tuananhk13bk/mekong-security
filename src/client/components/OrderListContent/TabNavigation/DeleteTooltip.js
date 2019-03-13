import React from 'react';
import { withStyles } from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
// import icons
import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => ({
  deleteFab: {
    color: 'white',
    background: 'red'
  },
  toolTipContainer: {
    marginLeft: 'auto',
    alignSelf: 'center',
    marginRight: 10
    // marginRight: theme.spacing.unit * 4,
    // marginTop: theme.spacing.unit * 2,
    // marginBottom: theme.spacing.unit * 2
  }
})

const ReassignTooltip = ({ classes }) => {

  return (
    <div 
      className={classes.toolTipContainer}
    >
      <Tooltip title="Hủy thẻ" aria-label="Add">
        <Fab className={classes.deleteFab} size="small">
          <DeleteIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default withStyles(styles)(ReassignTooltip);
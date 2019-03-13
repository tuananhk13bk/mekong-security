import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddTooltip from './AddTooltip'
import DeleteTooltip from './DeleteTooltip'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 24,
    background: 'grey',
    borderRadius: '5px',
  },
  
})

class TabNavigation extends React.Component {

  render() {
    const {
      // states
      tabIdOnSelect,
      // props from containers
      handleChange,
      // styles
      classes
    } = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={tabIdOnSelect}
          onChange={(event, index) => handleChange(event, index)}
          indicatorColor="primary"
          textColor="primary"
          // centered
        >
          <Tab label="Theo dõi xe" />
          <Tab label="Cấp lại thẻ" />
          <Tab label="Trả thẻ" />
          <DeleteTooltip />
          
        </Tabs>
      </Paper>
    );
  }
}

export default withStyles(styles)(TabNavigation);
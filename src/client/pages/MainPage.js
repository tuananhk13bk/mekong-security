import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
// Import my components
import MyDrawer from '../components/MainPage/MyDrawer'
// Import from react router
import { withRouter } from 'react-router'
// Import from recompose
import { compose } from 'recompose'

const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    // height: 50,
  },
  menuButton: {
    marginRight: 10,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#2196f3',
    // background: 'linear-gradient(to right, #24c6dc, #514a9d)'
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit *3,
    marginRight: theme.spacing.unit *3,
  },
});

class MainPage extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  render() {
    const { classes, theme, children } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <nav className={classes.drawer}>
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={this.props.container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <MyDrawer />
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <MyDrawer />
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          {children}
        </main>
      </div>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles, {withTheme: true})
)(MainPage)
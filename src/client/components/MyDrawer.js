import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'
// Import company logo file
import Logo from '../assets/img/Logo.png'
// Import material-ui-icons
import Settings from '@material-ui/icons/Settings'
import Help from '@material-ui/icons/Help'
import CompareArrows from '@material-ui/icons/CompareArrows'

// Import from react-router
import { Link } from 'react-router-dom'

const mainDrawerList = [
  {
    id: '',
    title: 'Theo dõi xe',
    icon: <CompareArrows />
  },
]

const utilitiesDrawerList = [
  {
    id: 'settings',
    title: "Cài đặt",
    icon: <Settings />
  },
  {
    id: 'help',
    title: "Trợ giúp",
    icon: <Help />
  }
]

const styles = {
  menuText: {
    color: 'white'
  },
  headerText: {
    color: 'white',
    padding: 10
  },
  headerIcon: {
    width: 40, 
    height: 40, 
    display: 'inline-block', 
    verticalAlign: 'middle', 
    background: 'white',
    marginRight: 10
  }
}

class MyDrawer extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <Typography 
          className={classes.headerText}
          variant="subtitle1"
        >
          <Avatar 
            src={Logo} alt="Company-Logo" 
            className={classes.headerIcon}
          />
            Mekong Port
        </Typography>
        <Divider />
        <List>
          {mainDrawerList.map(({ id, title, icon }) => (
            <ListItem 
              key={id}
              button
              component={Link}
              to={`/${id}`}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText 
                primary={
                  <Typography
                    variant="subtitle1"
                    className={classes.menuText}
                  >
                    {title}
                  </Typography>
                } 
              />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {utilitiesDrawerList.map(({ id, title, icon }) => (
            <ListItem  
              key={id}
              button
              component={Link}
              to={`/${id}`}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText 
                primary={
                  <Typography
                    variant="subtitle1"
                    className={classes.menuText}
                  >
                    {title}
                  </Typography>
                } 
              />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default withStyles(styles)(MyDrawer)
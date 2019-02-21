import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
// Import company logo file
import Logo from '../../assets/Logo.png'
// Import material-ui-icons
import VerifiedUser from '@material-ui/icons/VerifiedUser'
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
  {
    id: 'main',
    title: "Xác thực",
    icon: <VerifiedUser />
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

class MyDrawer extends Component {
  render() {
    return (
      <div>
        <Typography style={{ padding: 10, color: "white" }} variant="subtitle2">
          <Avatar 
            src={Logo} alt="Company-Logo" 
            style={{ width: 40, 
                     height: 40, 
                     display: 'inline-block', 
                     verticalAlign: 'middle', 
                     background: 'white',
                     marginRight: 20 }} 
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
              <ListItemText primary={title} />
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
              <ListItemText primary={title} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default MyDrawer
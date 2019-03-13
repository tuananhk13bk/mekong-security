import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Footer from '../Footer'

const styles = theme => ({
  root: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  mainContent: {
    flex: 1
  },
  footerContainer: {
    marginBottom: theme.spacing.unit * 2
  },
  paragraph: {
    marginTop: theme.spacing.unit*4
  },
  header: {
    color: '#2196f3'
  },
  companyName: {
    color: 'red',
    marginTop: theme.spacing.unit*3
  },
  img: {
    height: 30,
    width: 'auto',
    marginRight: 10,
    marginTop: 10
  }
})

const HelpContent = ({ classes }) => (
  <div className={classes.root}>
    <div className={classes.mainContent}>
      <Typography
        className={classes.header}
        variant="h5"
      >
        Trợ giúp
      </Typography>
      <Typography
        className={classes.companyName}
        variant="subtitle1"
      >
        CÔNG TY TNHH TM-DV-KT PHÁT TRIỂN PHÁP TRÍ
      </Typography>
      <Typography>
        Địa chỉ: 294/18K Xô Viết Nghệ Tĩnh, P. 21, Q. Bình Thạnh, TPHCM
        <br/>
        Website: <a href="">www.ptt.vn</a>
        <br/>
        MSTT: 031 083 2329
        <br/>
        Hotline: 0989 167 691 (Kinh doanh) - 0977 780 700 (Kỹ thuật)
      </Typography>
      <div>
        <img 
          src={require('../../assets/img/partner/GE.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/Kepware.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/ServelecControls.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/Wonderware.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/Siemens.jpg')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/Lantronix.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/Eldon.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/DetTronics.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/Rittal.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/RockwellAutomation.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
        <img 
          src={require('../../assets/img/partner/RedLion.png')} 
          alt="Logo"
          className={classes.img}
        ></img>
      </div>
    </div>
    <div className={classes.footerContainer}>
      <Footer/>
    </div>
  </div>
)

export default withStyles(styles)(HelpContent)
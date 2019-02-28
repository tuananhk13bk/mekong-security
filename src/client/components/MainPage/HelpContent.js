import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginTop: 10
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
        src={require('../../assets/partner/GE.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/Kepware.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/ServelecControls.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/Wonderware.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/Siemens.jpg')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/Lantronix.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/Eldon.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/DetTronics.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/Rittal.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/RockwellAutomation.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
      <img 
        src={require('../../assets/partner/RedLion.png')} 
        alt="Logo"
        className={classes.img}
      ></img>
    </div>
  </div>
)

export default withStyles(styles)(HelpContent)
import React, { Component } from 'react'
// import from @material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import AccountBox from '@material-ui/icons/AccountBox'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    marginBottom: theme.spacing.unit*3
  },
  header: {
    color: '#2196f3',
    marginTop: 10
  }
})

class Header extends Component {

  render() {
    const { codeOnFind, orderOnSelect, changeTextField, classes } = this.props
    return (
      <div className={classes.root}>
        <Typography variant='h5' className={classes.header}>
          Theo dõi xe
        </Typography>
        <Grid 
          container 
          // style={{marginBottom: 24 }}
        >
          <Grid item sm={6}>
            
          </Grid>
          <Grid item sm={6} >
            <Typography align="right">
              <TextField
                autoFocus
                autoComplete='off'
                variant="outlined"
                margin="dense"
                id="name"
                label="Tìm kiếm"
                placeholder="Nhập tại đây"
                // fullWidth
                value={codeOnFind}
                onChange={(event) => changeTextField(event.target.value)}
                
              />
            </Typography>
          </Grid>
        </Grid>

      </div>
      
    )
  }
}

export default withStyles(styles)(Header)
import React, { Component } from 'react'
// import from @material-ui
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import AccountBox from '@material-ui/icons/AccountBox'
import { withStyles } from '@material-ui/core/styles'
// Import from Redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import actions
import { changeTextField } from '../../../actions'
// combine multi HOC
import { compose } from 'recompose'

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

const mapStateToProps = (state) => {
  return {
    codeOnFind: state.rfidCodeReducer.codeOnFind,
    orderOnSelect: state.rfidCodeReducer.orderOnSelect
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({changeTextField,
                            }, dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStyles(styles)
)(Header)
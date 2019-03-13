import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import { withStyles } from '@material-ui/core/styles'
// import pictures
import WarningPicture from '../../assets/img/Warning.png'

const styles = theme => ({
  typography: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 200,
    marginRight: 200
  },
})

class DialogContent extends Component {

  render() {
    const {
      // style
      classes,
      // props from parent
      dialogIsOpen,
      orderOnSelect,
      rfidCodeInTextField,
      rfidReadercodeInTextField,

      toggleDialog,
      handleSubmitRfid,
      changeRfidCodeTextField,
      changeRfidReaderCodeTextField
    } = this.props
    return (
      <div>
        <Dialog
          open={dialogIsOpen}
          onClose={toggleDialog}
        >
          <Typography 
            className={classes.typography} 
            color="primary"
            variant="h6"
            >
            <img src={WarningPicture} alt="Warning Picture" />
            
            Scanning
            <br/>
            RFID31
          </Typography>
          <LinearProgress/>
          <form>
            <TextField
              autoFocus
              value={rfidCodeInTextField}
              onChange={(event) => changeRfidCodeTextField(event.target.value)}
              placeholder="RFID Code"
            ></TextField>
            <TextField
              value={rfidReadercodeInTextField}
              onChange={(event) => changeRfidReaderCodeTextField(event.target.value)}
              placeholder="RFID Reader Code"
            ></TextField>
            <Button
              onClick={(handleSubmitRfid)}
            >
              Submit
            </Button>
            {/* {codeOnFind === (orderOnSelect.rfidSysNum || "")
              ? null
              : <Typography>
                  Khong tim thay
                </Typography>
            } */}
          </form>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(DialogContent)



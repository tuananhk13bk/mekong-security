import React from 'react'
import { render } from 'react-dom'
// Redux element
import { Provider } from 'react-redux'
import { createStore } from 'redux'
// Import root reducer
import rootReducer from './reducers'
// Components
import App from './components/App'
// Create store
const store = createStore(rootReducer)
// Create theme
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import red from '@material-ui/core/colors/red'
import amber from '@material-ui/core/colors/amber'
// import css
// import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
    type: 'light'
  },
  text: {
    primary: blue
  }
})

render(
  
    <Provider store={store} >
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </Provider>
  , document.getElementById('root')
)


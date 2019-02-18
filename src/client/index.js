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
import yellow from '@material-ui/core/colors/yellow'
// import css
// import './index.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#2196f3'
    },
    secondary: {
      main: yellow[600],
      light: yellow[600]
    },
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


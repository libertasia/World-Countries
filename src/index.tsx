import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './redux/store'
import CustomThemeProvider from './CustomThemeProvider'

const WithProvider = () => (
  <Provider store={store}>
    <Router>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </Router>
  </Provider>
)

ReactDOM.render(<WithProvider />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import Routes from './Routes'

ReactDOM.render(
    <BrowserRouter>
      <App>
        {Routes}
      </App>
    </BrowserRouter>, document.getElementById('root'))
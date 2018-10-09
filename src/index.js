import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
      <App>
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
      </App>, document.getElementById('root'))
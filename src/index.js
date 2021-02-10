import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'plume-css'
import './shared/style/main.scss'
import UpperNav from './components/UpperNav.jsx'

ReactDOM.render(
  <React.StrictMode>
    <UpperNav/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import ReactDOM from 'react-dom'

import { AppRouter } from './components/AppRouter'

const appDiv = document.getElementById('app')
ReactDOM.render(<AppRouter />, appDiv)

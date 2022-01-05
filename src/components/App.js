import { Link } from 'react-router-dom'

import { ContactList } from './ContactList'
import { NavBar } from './NavBar'

export function App() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <ContactList />
      </div>
    </div>
  )
}

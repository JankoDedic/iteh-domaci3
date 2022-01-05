import { Link } from 'react-router-dom'

import { ContactEdit } from './ContactEdit'
import { ContactList } from './ContactList'
import { NavBar } from './NavBar'

export function App() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <ContactList />
        <ContactEdit />
      </div>
    </div>
  )
}

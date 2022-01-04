import { Link } from 'react-router-dom'

import { ContactEdit } from './ContactEdit'
import { ContactInfo } from './ContactInfo'
import { NavBar } from './NavBar'

export function App() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <ContactInfo firstName="Janko" lastName="Dedic" phoneNumber="123" />
        <ContactInfo firstName="Janko" lastName="Dedic" phoneNumber="123" />
        <ContactInfo firstName="Janko" lastName="Dedic" phoneNumber="123" />
        <ContactEdit />
      </div>
    </div>
  )
}

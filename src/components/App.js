import { Link } from 'react-router-dom'

import { ContactInfoOrEdit } from './ContactInfoOrEdit'
import { NavBar } from './NavBar'

export function App() {
  return (
    <div>
      <NavBar />

      <div className="container">
        <ContactInfoOrEdit
          firstName="Janko"
          lastName="Dedic"
          phoneNumber="123" />
      </div>
    </div>
  )
}

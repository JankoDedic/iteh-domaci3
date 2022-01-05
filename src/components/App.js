import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ContactEdit } from './ContactEdit'
import { ContactList } from './ContactList'
import { NavBar } from './NavBar'

export function App() {
  const [contacts, setContacts] = useState([{
    firstName: 'Janko',
    lastName: 'Dedic',
    phoneNumber: '123'
  }, {
    firstName: 'Marko',
    lastName: 'Markovic',
    phoneNumber: '456'
  }])

  const handleSave = (index, contact) => {
    const contactsCopy = [...contacts]
    contactsCopy[index] = contact
    setContacts(contactsCopy)
  }

  const handleNewContact = (contact) => setContacts(contacts.concat([contact]))

  return (
    <div>
      <NavBar />

      <div className="container">
        <ContactList contacts={contacts} onSave={handleSave} />
        <ContactEdit onSave={handleNewContact} />
      </div>
    </div>
  )
}

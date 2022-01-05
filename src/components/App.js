import { useState } from 'react'
import { Link } from 'react-router-dom'

import { ContactEdit } from './ContactEdit'
import { ContactList } from './ContactList'
import { NavBar } from './NavBar'

export function App() {
  const [contacts, setContacts] = useState(loadFromLocalStorage())

  const handleSave = (index, contact) => {
    const contactsCopy = [...contacts]
    contactsCopy[index] = contact
    setContacts(contactsCopy)
    saveToLocalStorage(contactsCopy)
  }

  const handleNewContact = (contact) => {
    const newContacts = contacts.concat([contact])
    setContacts(newContacts)
    saveToLocalStorage(newContacts)
  }

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

function saveToLocalStorage(contacts) {
  window.localStorage.setItem('contacts', JSON.stringify(contacts))
}

function loadFromLocalStorage() {
  const contacts = JSON.parse(window.localStorage.getItem('contacts'))
  return contacts == null ? [] : contacts
}

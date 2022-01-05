import { useState } from 'react'

import { ContactInfoOrEdit } from './ContactInfoOrEdit'

export function ContactList() {
  const [contacts, setContacts] = useState([{
    firstName: 'Janko',
    lastName: 'Dedic',
    phoneNumber: '123'
  }, {
    firstName: 'Marko',
    lastName: 'Markovic',
    phoneNumber: '456'
  }])

  const handleSave = (index) => (contact) => {
    const contactsCopy = [...contacts]
    contactsCopy[index] = contact
    setContacts(contactsCopy)
  }

  return (
    <div>{
      contacts.map((contact, index) =>
        <ContactInfoOrEdit
          key={index}
          onSave={handleSave(index)}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber} />
      )
    }</div>
  )
}

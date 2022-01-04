import { useState } from 'react'

import { ContactEdit } from './ContactEdit'
import { ContactInfo } from './ContactInfo'

export function ContactInfoOrEdit() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [editing, setEditing] = useState(false)

  const handleFirstNameChange = (event) => setFirstName(event.target.value)
  const handleLastNameChange = (event) => setLastName(event.target.value)
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value)
  const handleEdit = () => setEditing(true)
  const handleSave = () => setEditing(false)

  return (
    editing ?
      <ContactEdit
        firstName={firstName}
        onFirstNameChange={handleFirstNameChange}
        lastName={lastName}
        onLastNameChange={handleLastNameChange}
        phoneNumber={phoneNumber}
        onPhoneNumberChange={handlePhoneNumberChange}
        onSave={handleSave} />
    :
      <ContactInfo
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        onEdit={handleEdit} />
  )
}

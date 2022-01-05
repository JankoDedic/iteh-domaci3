import { useState } from 'react'

import { ContactEdit } from './ContactEdit'
import { ContactInfo } from './ContactInfo'

export function ContactInfoOrEdit(props) {
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)
  const [editing, setEditing] = useState(false)

  const handleFirstNameChange = (event) => setFirstName(event.target.value)
  const handleLastNameChange = (event) => setLastName(event.target.value)
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value)
  const handleEdit = () => setEditing(true)

  const handleSave = () => {
    props.onSave({ firstName, lastName, phoneNumber })
    setEditing(false)
  }

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
        firstName={props.firstName}
        lastName={props.lastName}
        phoneNumber={props.phoneNumber}
        onEdit={handleEdit} />
  )
}

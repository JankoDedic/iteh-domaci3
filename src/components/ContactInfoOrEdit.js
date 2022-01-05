import { useState } from 'react'

import { ContactEdit } from './ContactEdit'
import { ContactInfo } from './ContactInfo'

export function ContactInfoOrEdit({
  firstName,
  lastName,
  phoneNumber,
  onSave
}) {
  const [editing, setEditing] = useState(false)

  const handleEdit = () => setEditing(true)

  const handleSave = (contact) => {
    onSave(contact)
    setEditing(false)
  }

  return (
    editing ?
      <ContactEdit
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        onSave={handleSave} />
    :
      <ContactInfo
        firstName={firstName}
        lastName={lastName}
        phoneNumber={phoneNumber}
        onEdit={handleEdit} />
  )
}

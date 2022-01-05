import { ContactInfoOrEdit } from './ContactInfoOrEdit'

export function ContactList({ contacts, onSave }) {
  const handleSave = (index) => (contact) => onSave(index, contact)

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

import { useState } from 'react'

export function ContactEdit(props) {
  const [firstName, setFirstName] = useState(props.firstName)
  const [lastName, setLastName] = useState(props.lastName)
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber)

  const handleFirstNameChange = (event) => setFirstName(event.target.value)
  const handleLastNameChange = (event) => setLastName(event.target.value)
  const handlePhoneNumberChange = (event) => setPhoneNumber(event.target.value)

  const handleSaveClick = () => props.onSave({ firstName, lastName, phoneNumber })

  return (
    <div className="row p-2">
      <div className="col-4">
        <input
          className="form-control"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={handleFirstNameChange} />
      </div>

      <div className="col-4">
        <input
          className="form-control"
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={handleLastNameChange} />
      </div>

      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange} />
      </div>

      <div className="col">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  )
}

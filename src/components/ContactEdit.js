export function ContactEdit({
  firstName,
  onFirstNameChange,
  lastName,
  onLastNameChange,
  phoneNumber,
  onPhoneNumberChange,
  onSave
}) {
  return (
    <div className="row p-2">
      <div className="col-4">
        <input
          className="form-control"
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={onFirstNameChange} />
      </div>

      <div className="col-4">
        <input
          className="form-control"
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={onLastNameChange} />
      </div>

      <div className="col">
        <input
          className="form-control"
          type="text"
          placeholder="Phone number"
          value={phoneNumber}
          onChange={onPhoneNumberChange} />
      </div>

      <div className="col">
        <button type="button" className="btn btn-primary" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  )
}

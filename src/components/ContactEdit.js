export function ContactEdit({ firstName, lastName, phoneNumber, onSave }) {
  return (
    <div className="row p-2">
      <div className="col-4">
        <input type="text" className="form-control" placeholder="First name" />
      </div>

      <div className="col-4">
        <input type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="col">
        <input type="text" className="form-control" placeholder="Phone number" />
      </div>

      <div className="col">
        <button type="button" className="btn btn-primary" onClick={onSave}>
          Save
        </button>
      </div>
    </div>
  )
}

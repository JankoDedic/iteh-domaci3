export function ContactInfo({ firstName, lastName, phoneNumber, onEdit }) {
  return (
    <div className="row p-1">
      <div className="col-4 p-2 bg-light border">
        {firstName}
      </div>

      <div className="col-4 p-2 bg-light border">
        {lastName}
      </div>

      <div className="col p-2 bg-light border">
        {phoneNumber}
      </div>

      <div className="col">
        <button type="button" className="btn btn-primary" onClick={onEdit}>
          Edit
        </button>
      </div>
    </div>
  )
}

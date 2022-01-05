export function Card({ imageUrl, title, description }) {
  const divStyle = {
    width: '18rem'
  }

  return (
    <div className="card" style={divStyle}>
      <img src={imageUrl} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="#" className="btn btn-primary">See {title}</a>
      </div>
    </div>
  )
}

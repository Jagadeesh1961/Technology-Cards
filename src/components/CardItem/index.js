import './index.css'

const CardItem = props => {
  const {techCard} = props
  const {title, description, imgUrl, className} = techCard

  return (
    <li className={`tech-card-container ${className}`}>
      <h1 className="card-title">{title}</h1>
      <p className="card-description">{description}</p>
      <img className="card-image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem

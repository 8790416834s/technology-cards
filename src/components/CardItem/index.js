// Write your code here.
import './index.css'

const CardItem = props => {
  const {details, key} = props
  const {id, title, description, imgUrl, className} = details

  return (
    <li className={className}>
      <div className="card-container">
        <h1 className="heading">{title}</h1>
        <p className="paragraph">{description}</p>
        <div className="image-container">
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem

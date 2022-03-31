
import './personCard.css';


const PersonCard = (props) => {

  const {name, image, company, id} = props;

  return (
    <div className='card' data-id={id} data-name={name}>
      <div className='card__image'>
        <img src={image} alt='avatar'/>
      </div>
      <div className='card__name'>{name}</div>
      <div className="card__company">{company}</div>
    </div>
  )
}

export default PersonCard;
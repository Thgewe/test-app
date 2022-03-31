
import './sliderButton.css';

const SliderButton = (props) => {

  const { direction, onClick } = props;

  return (
    <button
      className='sliderButton'
      onClick={onClick}
      style={{transform: `rotate(${direction === 'left' ? '180deg' : '0'})`}}
      />
  )
}

export default SliderButton;
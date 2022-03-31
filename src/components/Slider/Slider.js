import PersonCard from '../PersonCard/PersonCard';
import SliderButton from '../SliderButton/SliderButton';
import { PersonService } from '../services/PersonService';
import { useState, useEffect, useRef } from 'react';

import './slider.css';

const Slider = (props) => {
  const { setPerson } = props;
  const [ persons, setPersons ] = useState([]);
  const [ personList, setPersonList ] = useState([]);
  const [ translate, setTranslate ] = useState({transform: `translate(0)`});
  const count = useRef(0);
  const prevSelected = useRef(null);
  const { getPersons } = PersonService();

  useEffect(() => {
    updatePersons();
  }, [])

  useEffect(() => {
    setPersonList(newCards(persons));
  }, [persons])

  const updatePersons = () => {
    getPersons()
      .then(setPersons);
  }

  const newCards = (arr) => {
    return arr.map((person, i) => {
      return (
        <PersonCard 
          key={person.id}
          id={person.id}
          name={person.name}
          company={person.company.name} 
          image={`https://i.pravatar.cc/320?img=${i}`} />
      )
    })
  }

  const cardsAmount = persons.length - 1;
  const onLeftClick = () => {
    if (cardsAmount - count.current === 9) {
      count.current = 5;
      onRightClick();
      return;
    }
    count.current--;
    setTranslate(() => ({transform: `translate(${-330 * count.current}px)`}));
  }
  const onRightClick = () => {
    if (cardsAmount - count.current === 3) {
      count.current = 1;
      onLeftClick();
      return;
    }
    count.current++;
    setTranslate(() => ({transform: `translate(${-330 * count.current}px)`}));
  }

  const onCardClick = (e) => {
    const target = e.target.parentNode.classList.contains("card__image") ? e.target.parentNode.parentNode : e.target.parentNode;
    if (target.classList.contains('card')) {
      if (target.classList.contains('card-selected')) return;
      if (prevSelected.current === null) {
        target.classList.add('card-selected');
        prevSelected.current = target;
      } else {
        target.classList.add('card-selected');
        prevSelected.current.classList.remove('card-selected');
        prevSelected.current = target;
      }
      setPerson(() => ({
        id: target.getAttribute("data-id"),
        name: target.getAttribute("data-name"),
      }));
    }
  }

  return (
    <div className='slider'>
      <div className='slider__buttons'>
        <SliderButton direction='left' onClick={onLeftClick} />
        <SliderButton direction='right'onClick={onRightClick} />
      </div>
      <div className="slider__content">
        <div className="slider__track" style={translate} onClick={onCardClick}>
          {personList}
        </div>
      </div>
    </div>
  )
}

export default Slider;
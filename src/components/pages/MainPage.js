import { useState } from 'react';
import TitleText from '../TitleText/TitleText';
import Slider from '../Slider/Slider';
import PostList from '../PostList/PostList';

import dottedRight from '../image/svg/dottedRight.svg';
import dottedLeft from '../image/svg/dottedLeft.svg';
import quotes from '../image/svg/quotes.svg';

import './mainPage.css';


const MainPage = () => {
  const [ person, setPerson ] = useState({});
  
  return (
    <div className="main">
      <TitleText/>
      <Slider setPerson={setPerson}/>
      <div className='main__dottedLeft'>
        <img src={dottedLeft} alt='decor'/>
      </div>
      <div className='main__dottedRight'>
        <img src={dottedRight} alt='decor'/>
      </div>
      <div className='main__quotes'>
        <img src={quotes} alt='decor'/>
      </div>
      <div className='main__posts'>
        <PostList name={person.name} personId={person.id}/>
      </div>
    </div>
  );
}

export default MainPage;
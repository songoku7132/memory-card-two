import './styles/App.css'
import Card from './components/Card';
import React, { useState, useEffect } from 'react';
import Scoreboard from './components/Scoreboard';
import Image1 from './images/1.jpg'
import Image2 from './images/2.jpg'
import Image3 from './images/3.jpg'
import Image4 from './images/4.jpg'
import Image5 from './images/5.jpg'
import Image6 from './images/6.jpg'
import Image7 from './images/7.jpg'
import Image8 from './images/8.jpg'
import Image9 from './images/9.jpg'
import Image10 from './images/10.jpg'
import Image11 from './images/11.jpg'
import Image12 from './images/12.jpg'

const App = () => {

  const [count, setCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([])
  const [arr, setArr] = useState([])

  useEffect(() => {
    if(count === 12 ){
      alert('You Win!')
    }
    randomizeCards();
  }, [count]);

  const randomizeCards = () => {
    const cardsData = [
      { id: 1, name: 1, image: Image1 },
      { id: 2, name: 2, image: Image2 },
      { id: 3, name: 3, image: Image3 },
      { id: 4, name: 4, image: Image4 },
      { id: 5, name: 5, image: Image5 },
      { id: 6, name: 6, image: Image6 },
      { id: 7, name: 7, image: Image7 },
      { id: 8, name: 8, image: Image8 },
      { id: 9, name: 9, image: Image9 },
      { id: 10, name: 10, image: Image10 },
      { id: 11, name: 11, image: Image11 },
      { id: 12, name: 12, image: Image12 },
    ];

    const randomizedCards = shuffleArray(cardsData);
    setCards(randomizedCards);
  }

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
  
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
    }
  
    return shuffledArray;
  };

  const handleCardClick = (i) => {
    if (arr.includes(i)) {
      setCount(0)
      setArr([])
    }else {
      setCount(prevCount => prevCount + 1)
      setBestScore(prevBestScore => {
        if (count + 1 > prevBestScore) {
          return count + 1;
        } else {
          return prevBestScore;
        }
      })
      setArr(prevArr => [...prevArr, i])
      console.log(arr)
    }
  }

  return (
    <div className='main'>
      <Scoreboard currentScore={count} bestScore={bestScore}/>
      <div className='card-box'>
        {cards.map((card) => {
          return (
          <Card 
          key={card.id}
          image={card.image}
          name={card.name}
          onClick={() => handleCardClick(card.id)}
          />
          );
        })}
        
      </div>
    </div>
  );
}

export default App;

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

import GameCard from "./GameCard"
import animalArr from "./AnimalArray"

const GameBoard = () => {
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)
  const [cards, setCards] = useState([])
  const [disabled, setDisabled] = useState(false)

  const shuffleArray = (arr) => {
    const shuffled = [...animalArr, ...animalArr]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))
    
    setCards(shuffled)
  }

  const handleSelected = (animal) => {
    firstCard ? setSecondCard(animal) : setFirstCard(animal)
  }

  const resetCards = () => {
    setFirstCard(null)
    setSecondCard(null)
    setDisabled(false)
  }

  useEffect(()=> {
    if (firstCard && secondCard) {
      setDisabled(true)
      // compare card selections
      if (firstCard.img === secondCard.img) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.img === firstCard.img) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        }) 
        resetCards()
      } else {
        setTimeout(()=> resetCards(), 1000)
      }
    }
  },[firstCard, secondCard])


  useEffect(() => {
    shuffleArray(animalArr)
  }, [])

  return (
    <>
    <Container>
    <Row xs={5}>
        {cards.map((animal) => (
          <GameCard
          key = {animal.id}
          animal = {animal}
          handleSelected = {handleSelected}
          flipped={animal === firstCard || animal === secondCard || animal.matched}
          disabled={disabled}
          />
        ))}
      </Row>
    </Container>

    </>
  )
}


export default GameBoard
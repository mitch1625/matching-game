import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

import GameCard from "./GameCard"
import animalArr from "./AnimalArray"

const GameBoard = () => {
  const [shuffledArr, setShuffledArr] = useState([])
  const [firstCard, setFirstCard] = useState(null)
  const [secondCard, setSecondCard] = useState(null)

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    setShuffledArr(arr)
  }

  const handleSelected = (animal) => {
    if (firstCard !== null && firstCard !== animal.name) {
      setSecondCard(animal)
      console.log('frist card: ', firstCard)
      console.log('second card: ',secondCard)
    } else {
      setFirstCard(animal)
      console.log('first card: ', firstCard)
    }
  }

  /// leftoff here
  useEffect(()=> {
    if (firstCard && secondCard) {
      if (firstCard === secondCard) {
        console.log('winner')
      }

    }
  },[firstCard, secondCard])

  // update this useEffect when play button is addedd
  useEffect(() => {
    shuffleArray(animalArr)
  }, [])

  return (
    <>
    <Container>
    <Row xs={4}>
        {shuffledArr.map((animal) => (
          <GameCard
          key = {animal.id}
          id = {animal.id}
          name = {animal.name}
          imgSrc = {animal.img}
          handleSelected = {handleSelected}
          />
        ))}
      </Row>
    </Container>

    </>
  )
}


export default GameBoard
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

import GameCard from "./GameCard"
import animalArr from "./AnimalArray"

const GameBoard = () => {
  const [shuffledArr, setShuffledArr] = useState([])

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i+1));
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    setShuffledArr(arr)
  }

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
          />
        ))}
      </Row>
    </Container>

    </>
  )
}


export default GameBoard
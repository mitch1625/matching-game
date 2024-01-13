import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';

import GameCard from "./GameCard"

const GameBoard = () => {
  const [shuffledArr, setShuffledArr] = useState([])

  const animalArr = [
    {
      id: 1,
      name: 'Alligator',
      img: 'src/card-imgs/alligator.png'
    },
    {
      id: 2,
      name: 'Cat',
      img: 'src/card-imgs/cat.png'
    },
    {
      id: 3,
      name: 'Dog',
      img: 'src/card-imgs/dog.png'
    },
    {
      id: 4,
      name: 'Giraffe',
      img: 'src/card-imgs/giraffe.png'
    },
    {
      id: 5,
      name: 'Owl',
      img: 'src/card-imgs/owl.png'
    },
    {
      id: 6,
      name: 'Penguin',
      img : 'src/card-imgs/penguin.png'
    },
    {
      id: 7,
      name: 'Tucan',
      img: 'src/card-imgs/tucan.png'
    },
    {
      id: 8,
      name: 'Unicorn',
      img: 'src/card-imgs/unicorn.png'
    },
    {
      id: 9,
      name: 'Alligator',
      img: 'src/card-imgs/alligator.png'
    },
    {
      id: 10,
      name: 'Cat',
      img: 'src/card-imgs/cat.png'
    },
    {
      id: 11,
      name: 'Dog',
      img: 'src/card-imgs/dog.png'
    },
    {
      id: 12,
      name: 'Giraffe',
      img: 'src/card-imgs/giraffe.png'
    },
    {
      id: 13,
      name: 'Owl',
      img: 'src/card-imgs/owl.png'
    },
    {
      id: 14,
      name: 'Penguin',
      img : 'src/card-imgs/penguin.png'
    },
    {
      id: 15,
      name: 'Tucan',
      img: 'src/card-imgs/tucan.png'
    },
    {
      id: 16,
      name: 'Unicorn',
      img: 'src/card-imgs/unicorn.png'
    }
  ]

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
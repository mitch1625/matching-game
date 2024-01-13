import Card from 'react-bootstrap/Card';

const GameCard = ({ id, name, imgSrc, handleSelected }) => {

  const handleClick = (name) => {
    handleSelected(name)
  }


  return(
    <>
    <Card onClick={()=>handleClick(name)} key={id} style={{ width: '18rem' }}>
      <Card.Img variant="top"
      src={imgSrc}
       />
      <Card.Text>{name}</Card.Text>
      </Card>
    </>
  )
}

export default GameCard
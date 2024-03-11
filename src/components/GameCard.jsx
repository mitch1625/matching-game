
const GameCard = ({ animal, handleSelected, flipped, disabled }) => {

  const handleClick = () => {
    if(!disabled){
      handleSelected(animal)
    }
  }

  return(
    <>
      <div className='card' key={animal.id}>
        <div className={flipped ? "flipped" : ""}>
          <img className="front" 
          src={animal.img}
          />
          <img className="back" 
          src={"./src/card-imgs/back-of-card.png"} 
          onClick={()=>handleClick(animal)}
          />
        </div>
      </div>
    </>
  )
}

export default GameCard
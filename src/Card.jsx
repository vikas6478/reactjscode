const Card = ({ vikas }) => {
  let { title, price, description, image } = vikas;

  return (
    <>
    <div>
    <div style={{width: "250px",border: "2px solid black",padding: "5px"}}>

      <img src={image} alt="" style={{ width: "100%" }} />

      <h2>{title}</h2>
      <h3>₹{price}</h3>
      <p>{description}</p>
    </div>
    </div>
   
    </>
  )
}

export default Card;

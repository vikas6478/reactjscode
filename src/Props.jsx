import Card from "./Card"
// import Child from "./Child"


const App = () => {

  //   let myname = "kunnu"
    
  //    let student = {
  //   name: "Kunnu",
  //   age: 15,
  //   city: "Delhi"
  // }

    let product = {
    title: "Smart Watch",
    price: 1499,
    description: "Waterproof, Touch Screen, Bluetooth Calling",
    image: "../public/Picsart_24-10-15_00-20-35-121.jpg"  
  }
    let product2 = {
    title: "smart tv",
    price: 221499,
    description: "Waterproof, Touch Screen, Bluetooth Calling",
    image: "../public/Picsart_24-10-15_00-20-35-121.jpg"  
  }


  return (
    <>
    {/* <h1>home page</h1>
    <Child myname={myname} age={15} info={student}/> */}
   {/* <h1>Home Page</h1> */}
      <div style={{display:"flex",gap:"20px"}}>
      <Card vikas={product}/>
      <Card vikas={product2}/>
    </div>
    </> 
  )
}

export default App

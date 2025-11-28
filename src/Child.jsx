

const Child = ({info}) => {
// const Child = (props) => {
// const Child = ({info}) => {
    let {name,age,city} = info
  return (
    <>
    {/* <h1>hello child</h1>
     <p>my name is {props.myname}</p>
     <p>my age is {props.age}</p> */}

     {/* <h2>Student Details</h2>
      <p>Name: {props.info.name}</p>
      <p>Age: {props.info.age}</p>
      <p>City: {props.info.city}</p> */}

      {/* <h2>Student Details</h2>
      <p>Name: {info.name}</p>
      <p>Age: {info.age}</p>
      <p>City: {info.city}</p> */}

      <h2>Student Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
    </>
  )
}

export default Child

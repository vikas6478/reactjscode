import imgvr from "./assets/Picsart_24-10-15_00-20-35-121.jpg"

const BackPicture = () =>{
    return(
        <>
        <div style={{display:"flex",gap:"35px"}} >
        {/* <div ><img style={{ width: "100%", height: "auto", display: "block" }} src="public/Picsart_24-10-15_00-20-35-121.jpg" alt="" /></div>
        <div ><img style={{ width: "100%", height: "auto", display: "block" }} src="public/Picsart_24-10-15_00-20-35-121.jpg" alt="" /></div> */}
        {/* <h1 style={{fontWeight:"5px"}}>Home page</h1> */}
        </div>
        </>
    )
}

const BackPicture2 = () =>{
    return(
        <>
        <div style={{display:"flex",gap:"35px"}}>
        <div ><img style={{ width: "100%", height: "auto", display: "block" ,marginTop:"10px"}} src="public/Picsart_24-10-15_00-20-35-121.jpg" alt="" /> </div>
        <div ><img style={{ width: "100%", height: "auto", display: "block" ,marginTop:"10px"}} src={imgvr} alt="" /></div>
        {/* <h1 style={{fontWeight:"5px"}}>Home page</h1> */}
        </div>
        </>
    )
}

export {BackPicture,BackPicture2}
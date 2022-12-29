import React from 'react'
import img1 from "./images/simple1.jpg"

function Book(props) {
  return (
  
    <div class="card" style={{width: 250}}>
  <img src={img1} class="card-img-top" alt=""/> 
   <div class="card-body">
    <h5 class="card-title">{props.data}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.youtube.com/watch?v=P7cBMvJpMoU&list=PLWTekDanpmdhm-D-v5R6_iRx9vU-Lsxce&index=25" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    
    
  )
}

export default Book
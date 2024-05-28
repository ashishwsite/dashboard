import React from 'react'

const Card3 = () => {
  return (
    <div class="market-carousel-item" tabindex="-1" style={{ width: '90%' ,display: 'inline-block', marginLeft:'15px' , height:'250px' ,border:"solid yelllow 0.1px" ,borderRadius:" 5px", backgroundColor:'rgb(240, 245, 242)' }}>
        <div class="market-carousel-item-name mt-2 ml-2"><img src="https://crypo-nextjs.netlify.app/img/icon/3.png" height="50px" width="40px" alt="" style={{marginLeft:"15px"}}/>
           <span className='container' >Lite Coin</span>
        </div>
        <diV className="container" style={{marginTop:"10px"}}>
        <h2 style={{marginLeft:"15px"}}>62789.32 ETH</h2>
        <p style={{marginLeft:"15px"}}>$53,112</p>
        {/* <button class="btn buy" style={{borderRadius:'2px gold' ,backgroundColor:'green', marginLeft:'15px', marginBottom:"5px"}}>View Details</button> */}
        <div className='container'> <button class="btn buy" style={{borderRadius:'2px gold' ,backgroundColor:'green', textAlign:"center",  marginBottom:"5px"}}>View Details</button></div>
        </diV>
    </div>
    
  )
}

export default Card3

import React from 'react'
import './Card1Style.css'
const CardContent = () => {
  return (
    // img add= https://crypo-nextjs.netlify.app/img/icon/1.png
    // <div class="market-carousel-item" tabindex="-1" style={{ width: '100%', display: 'inline-block', marginLeft:'15px', border:"solid 2px", borderRadius:"5px", backgroundColor:'rgb(200, 220, 237)' }}>
    <div class="market-carousel-item" tabindex="-1" style={{ width: '90%' ,display: 'inline-block', marginLeft:'15px' , height:'250px' ,border:"solid yelllow 0.1px" ,borderRadius:" 5px", backgroundColor:'rgb(240, 245, 242)' }}>
        <div class="market-carousel-item-name mt-2 ml-2"><img src="https://crypo-nextjs.netlify.app/img/icon/1.png" height="50px" width="40px" alt="" style={{marginLeft:"15px"}}/>
           <span className='container' >Binance Coin</span>
        </div>
        <div className='container' style={{marginTop:"10px"}}>  <h2 style={{marginLeft:"15px"}}>328229.32 BNB</h2>
            <p style={{marginLeft:"15px"}}>$12,402</p>
            {/* <button class="btn buy" style={{borderRadius:'2px gold' ,backgroundColor:'green', marginLeft:'15px', marginBottom:"5px"}}>View Details</button> */}
            <div className='container'> <button class="btn buy" style={{borderRadius:'2px gold' ,backgroundColor:'green', textAlign:"center", marginBottom:"5px"}}>View Details</button></div>
    </div>
    </div>
          
  )
}

export default CardContent

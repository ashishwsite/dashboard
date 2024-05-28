import React from 'react'

const Card2 = () => {
  return (
    <div class="market-carousel-item" tabindex="-1" style={{ width: '90%' ,display: 'inline-block', marginLeft:'15px' , height:'250px' ,border:"solid yelllow 0.1px" ,borderRadius:" 5px", backgroundColor:'rgb(240, 245, 242)' }}>
    <div class="market-carousel-item-name mt-2 ml-2"><img src="https://crypo-nextjs.netlify.app/img/icon/16.png" height="50px" width="40px" alt="" style={{marginLeft:"15px"}}/>
       <span className='container' >Cardino</span>
    </div >
    <div className='container' style={{marginTop:"10px"}} >
    <h2 style={{marginLeft:"15px" }}>331229.32 NEO</h2>
        <p style={{marginLeft:"15px"}}>$11,02</p>
        <div className='container'> <button class="btn buy" style={{borderRadius:'2px gold' ,backgroundColor:'green', textAlign:"center", marginBottom:"5px"}}>View Details</button>
        {/* <button class="btn buy" style={{borderRadius:'2px gold' ,backgroundColor:'green', textAlign:"center", marginBottom:"5px"}}>Buy || Sell</button> */}
        </div>
        
       
    </div>    
</div>
  )
}

export default Card2

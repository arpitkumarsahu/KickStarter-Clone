import React from 'react'

function Poster() {
  return (
    <div style={{paddingTop:"100px",marginTop:"50px", paddingBottom:"100px", borderTop:"1px solid lightgrey", borderBottom:"1px solid lightgrey"}}>
        <div style={{display:"flex", justifyContent:"space-between", gap:"70px"}}>
            <img style={{
                width:"600px",
                height:"250px"
            }} 
            src="https://ksr-static.imgix.net/ksr-LSS-2560x1080-HP-LP-V2-e08b5e5.jpg?ixlib=rb-4.0.2&s=c3094863a95ed89ea39989a54ebbe5e3" alt="Short story" />
            <div>
                <h3 style={{color:"rgb(3, 115, 98)", fontSize:"24px", cursor:"pointer"}}>A spotlight on short films</h3>
                <p style={{color:"grey", cursor:"pointer"}}>In March 2023, we’re launching Long Story Short, our annual celebration of bold and brilliant short films—and the visionary people who make them.</p>
            </div>
        </div>
    </div>
  )
}

export default Poster
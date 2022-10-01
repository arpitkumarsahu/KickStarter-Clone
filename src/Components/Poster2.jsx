import React from 'react'

function Poster2() {
  return (
    <div style={{paddingTop:"100px",marginTop:"50px", paddingBottom:"100px", borderTop:"1px solid lightgrey", borderBottom:"1px solid lightgrey"}}>
        <div style={{display:"flex", justifyContent:"space-between", gap:"70px"}}>
            <img style={{
                width:"600px",
                height:"250px"
            }} 
            src="https://ksr-static.imgix.net/7e6841f0a9516889efaf08eb2c51c35c_original-214f090.jpeg?ixlib=rb-4.0.2&s=2d1ff8b6659e4dbb94ea1fbc1f3d35c1" alt="Short story" />
            <div>
                <h3 style={{color:"rgb(3, 115, 98)", fontSize:"24px", cursor:"pointer"}}>How to Create a Great Kickstarter Publishing Project Page</h3>
                <p style={{color:"grey", cursor:"pointer"}}>Discover tips and tricks for each element of your campaign, from choosing your funding goal to lining up creative rewards.</p>
            </div>
        </div>
    </div>
  )
}

export default Poster2

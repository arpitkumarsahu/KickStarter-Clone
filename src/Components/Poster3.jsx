import React from 'react'

function Poster3() {
  return (
    <div>
      <div style={{paddingTop:"100px",marginTop:"50px", paddingBottom:"100px", borderTop:"1px solid lightgrey", borderBottom:"1px solid lightgrey"}}>
        <div style={{display:"flex", justifyContent:"space-between", gap:"70px"}}>
            <img style={{
                width:"600px",
                height:"250px"
            }} 
            src="https://ksr-static.imgix.net/kickstarter-web30-21x9-ad48340.png?ixlib=rb-4.0.2&s=a14fb66d3d1da3f099c4a9ce4afb6d97" alt="Short story" />
            <div>
                <h3 style={{color:"rgb(3, 115, 98)", fontSize:"24px", cursor:"pointer"}}>The Future of Crowdfunding Creative Projects</h3>
                <p style={{color:"grey", cursor:"pointer"}}>To truly serve our mission to help bring creative projects to life, we need to build on what made Kickstarter so innovative in the first place: the power of a large network of people working together towards a common goal.</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Poster3

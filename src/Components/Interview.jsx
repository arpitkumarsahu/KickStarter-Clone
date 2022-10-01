import React from 'react'

function Interview() {
  return (
    <div style={{marginTop:"70px"}}>
      <h3>INTERVIEWS FROM THE CREATIVE INDEPENDENT</h3>
      <div style={{display:"flex", justifyContent:"space-between", cursor:"pointer"}}>
        <div style={{width: "23%"}}>
            <img width={"100%"} height="400px" src="https://s3.amazonaws.com/tci-assets/uploads/ocean1.jpg" alt="1st grid" />
            <p style={{fontSize:"18px", color:"grey"}}>Author Ocean Vuong on being generous in your work</p>
        </div>
        <div style={{width: "23%"}}>
            <img width={"100%"} height="400px" src="https://cdn.filestackcontent.com/CQH9UGSuRie7XhXefFio" alt="1st grid" />
            <p style={{fontSize:"18px", color:"grey"}}>Musician and writer Michelle Zauner on finding ways to keep going</p>
        </div>
        <div style={{width: "23%"}}>
            <img width={"100%"} height="400px" src="https://s3.amazonaws.com/tci-assets/uploads/tself.jpg" alt="1st grid" />
            <p style={{fontSize:"18px", color:"grey"}}>Visual artist Tschabalala Self on not being afraid of hard work</p>
        </div>
        <div style={{width: "23%"}}>
            <img width={"100%"} height="400px" src="https://cdn.filestackcontent.com/ccKVd36lRKKtdsfnwVbs" alt="1st grid" />
            <p style={{fontSize:"18px", color:"grey"}}>Composer Danny Elfman on not being afraid of failure</p>
        </div>
      </div>
    </div>
  )
}

export default Interview

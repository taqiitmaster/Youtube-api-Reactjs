import React, { useEffect, useState } from 'react'
import Youtube from './youtube';

function App() {
  
  const [data,setData]=useState ([]);
  const apikey='AIzaSyDLiCpiDNUCPdkXfRHvRcy7eVH2cws5P1w'
  // const base_apikey='https://www.googleapis.com/youtube/v3/'
  const base_url=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apikey}&maxResults=500`

  useEffect(()=>{
    async function fetchvideos(){
      const res= await fetch(base_url)
      const data = await res.json();
      console.log(data)
      setData(data.items)
  
    }
    fetchvideos();
    
  },[])
  
  return (
   <>
   <Youtube/>
   {data.map((pack)=>{
    const{snippet}=pack
    return(
      <>
      <center>
        <div key={snippet.channelId}>
        
          <img style={{height:"500px",width:"500px"}} src={snippet.thumbnails.medium.url} alt="" />
        </div>
      </center>
      </>
    )
   })}
   </>
  )
}

export default App

import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
    import NorthIcon from '@mui/icons-material/North';

const BotToTop=()=> {

  const [showArrow,setShowArrow]=useState(false);


  const listeToScroll=()=>{
    const heightToHidden=250;
    // for height from top to show 
    const winScroll= document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll > heightToHidden){
setShowArrow(true);
    }
    else{
      setShowArrow(false)
    }
  };
  useEffect(()=>{
    window.addEventListener("scroll",listeToScroll)
  },[])


  // for scrolling to top0
  const handleOnTop=()=>{
    window.scrollTo({
      top:0 ,left :0 ,behavior:"smooth"
    })
  }
  return (
    <>
    {showArrow && (       
    <IconButton id="icon-button"  sx={{position:"fixed ",bottom :"50px" , right:"25px",backgroundColor:"pink"
    
    }} onClick={handleOnTop}>
    <NorthIcon/>
    
    </IconButton>
    
    ) }
    </>
  )
}

export default BotToTop

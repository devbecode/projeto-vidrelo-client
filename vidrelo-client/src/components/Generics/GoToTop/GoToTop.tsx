import  { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function GoToTop() {
const routePath =useLocation()
const onTop=() =>{
  window.scroll({
    top: 0, 
    left: 0, 
    behavior: 'smooth'
  });
  // window.scrollTo({
  //   top: 0,
  //   left: 0,
  //   behavior: 'auto',
  // });
}
useEffect(() => {
  onTop()
}, [routePath])


  return null
}

export default GoToTop
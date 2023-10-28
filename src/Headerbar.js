import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

const Headerbar = ({OpenSidebar}) => {
  return (
    <header className='header'>
    <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar}/>
    </div>
  
</header>
  )
}

export default Headerbar
import React from 'react'
import Navbar from '../Components/Navbar'

const PageLyout = ({children}) => {
  return (
    <div>
        <Navbar/>
    <div>{children}</div>
    </div>
  )
}

export default PageLyout
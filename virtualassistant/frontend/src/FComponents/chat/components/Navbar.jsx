import React from 'react'

const Navbar = () => {
  return (
    <div className='chatnavbar'>
      <span className='logo'>Lama chat</span>
      <div className='user'>
        <img src="" alt="" />
        <span>John</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
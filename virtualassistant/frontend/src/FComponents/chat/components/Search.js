import React from 'react'
import image from "../../../images/vmainpage.jpg"
import "./Search.css"

const Search = () => {
  return (
      <div className='search'>
          <div className='searchForm'>
              <input type="text" placeholder='find a user' />
             <div className='userChat'>
              <img src={image} alt="logo" />
              <div className='userChatInfo'>
                <span>Jane</span>
                </div>
              </div>
          </div>
      </div>
  )
}

export default Search
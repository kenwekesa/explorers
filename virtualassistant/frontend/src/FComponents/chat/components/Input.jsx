import React from 'react'
import add from "../../../images/addimageone.png"
import attach from "../../../images/attachimageone.png"

const Input = () => {
  return (
    <div className='chatInput'>
      <div>
        <input type="text" placeholder="Type something..." />
      </div>
      <div className='chatsend'>
        <img src={attach} alt="" />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={add} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
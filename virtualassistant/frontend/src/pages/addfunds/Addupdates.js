import React, { useState} from 'react'
import Addadmincard from './Addadmincard'
import "./Addupdates.css"


const Addupdates = () => {

 const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className='addupdates'>
    <h1>Admin Updates</h1>
    <div className='cardupdates'>   
        <p className='paragraph-word-limit'>This is the first thing we should be doing in the first place,
            this is the first thing we should be doing in the first place,
            this is the first thing we should be doing in the first place</p>
       <button className='ton tin tun' onClick={openDialog}>Read Update</button>
        <Addadmincard
              isOpen={isDialogOpen}
              onClose={closeDialog} 
              />
          </div>
        <div className='cardupdates'>   
        <p className='paragraph-word-limit'>This is the first thing we should be doing in the first place,
            this is the first thing we should be doing in the first place,
            this is the first thing we should be doing in the first place</p>
       <button className='ton tin tun' onClick={openDialog}>Read Update</button>
        <Addadmincard
              isOpen={isDialogOpen}
              onClose={closeDialog} 
              />
          </div>
        <div className='cardupdates'>   
        <p className='paragraph-word-limit'>This is the first thing we should be doing in the first place,
            this is the first thing we should be doing in the first place,
            this is the first thing we should be doing in the first place</p>
       <button className='ton tin tun' onClick={openDialog}>Read Update</button>
        <Addadmincard
              isOpen={isDialogOpen}
              onClose={closeDialog} 
              />
          </div>
        <div className='cardupdates'>   
        <p className='paragraph-word-limit'>This is the first thing we should be doing in the first place,
            this is the first thing we should be doing in the first place,
            this is the first thing we should be doing in the first place</p>
       <button className='ton tin tun' onClick={openDialog}>Read Update</button>
        <Addadmincard
              isOpen={isDialogOpen}
              onClose={closeDialog} 
              />
      </div>
    </div>
  )
}

export default Addupdates
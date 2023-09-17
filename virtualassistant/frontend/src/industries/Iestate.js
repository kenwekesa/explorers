import React from 'react'
import bwoner from "../images/vcont.jpg"
import "./Iecommerce.css"

const Iestate = () => {
 
return (
  <div className='induowner'>
    <div className='induowmain'>
      <div className='induoimgs'>
        <p className='indufirstp'>E-Commerce Business <span className='spancolor1'>Solutions</span></p>
         <p className='indusecondp'>business owners can reap the benefits of Ossisto’s comprehensive virtual assistance solutions,
         which save time, increase productivity, and promote business success. Our skilled and trained virtual
         assistants can handle a variety of duties, including administrative support, social media administration,
         and customer service, allowing small business owners to focus on expansion. We recognize that small enterprises have specific demands, and our tailored solutions can be modified to meet them.
         Whether you require assistance with day-to-day tasks or strategic planning, Ossisto has the ideal solution for you.  Trust us to be your dependable partner for virtual assistance in the small business sector.</p>
        <a href="one.html" className="ton">Hire VA</a>        
     </div>
     <div className='induoimg'>
        <img src={bwoner} alt='logo' loading="lazy" className='bownerimg'/>   
     </div>         
    </div>        
    </div>
  )
}

export default Iestate
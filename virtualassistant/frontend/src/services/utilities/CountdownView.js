import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Countdown } from './Countdown';
import './countdownview.scss'



const CountdownView = ({item_deadline}) => {

    const [days, hours, minutes, seconds] = Countdown(item_deadline);

    
    return (
    <div className='countdown_container'>
        <div className='countdown'>
                {/* <h4>Deadline: </h4> */}
                {days < 0 ?
                    <div className='figures elpased'>
                       <span className='deadline_days'>
                            {days} Days
                        </span>
                        <span className='deadline_hours'>
                            {hours} hrs
                        </span>
                        {/* <span className='deadline_minutes'>
                    {minutes} Minutes 
                    </span>
                    <span className='deadline_seconds'>
                        {seconds} Seconds
                        </span> */}
                    </div> :
                    <div className='figures notelpased'>
                        <span className='deadline_days'>
                            {days} days
                        </span>
                        <span className='deadline_hours'>
                            {hours} hrs
                        </span>
                        {/* <span className='deadline_minutes'>
                    {minutes} Minutes 
                    </span>
                    <span className='deadline_seconds'>
                        {seconds} Seconds
                        </span> */}
                    </div>
                }
             </div>
        </div>
    
  )
}

export default CountdownView
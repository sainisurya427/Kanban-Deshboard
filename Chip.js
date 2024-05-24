import React from 'react'
import { x } from 'react-feather';
import './Chip.css';

export default function Chip(props) {
  return (
    <div className='Chip' style={{backgroundColor:props.color}}>
{props.text} 
{props.close && < x  onClick= {props.onClose ? props.onClose(): " " }/>
      
</div>
  );
}

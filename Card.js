import React, { useState } from 'react'
import "./Card.css";
export default function Card(props) {
  const [showDropdown, setShowDropdown]= useState(false)
  return (
    <div className='card'
    draggable
    onDragEnd={()=>props.handleDragEnd(props.Card?.id, props.boardId)}
    onDragEnter={()=>props.handleDragEnter(props.Card?.id, props.boardId)}
    >
        <div className="card_top">
            <div className="card_top_labels">
              {
                props.card?.labels?.map((item, index)=><Chip key={index}
                text={item.text}
                color={item.color}
                />)
              }
            <Chip text = "Frontend" color="green" />
            
            </div>
            <div className="card_top_more" onClick={()=>setShowDropdown(true)}>
        <MoreHorizontal/>
        {
          showDropdown && (
        <Dropdown onClose={()=>setShowDropdown(false)}>
          <div className="card_dropdown">
          <p onClick={()=>props.removeCard(props.card?.id,props.boardId)}>Delete Card</p>

          </div>
        </Dropdown>

          )}
        </div>
        </div>
        <div className="card_title">
          {props.card?.title}
        </div>
        <div className="card_footer">
          {
           { props.card?.date && (
            <p><clock/> {props.card?.date}
            </p>
           )}
}
            <p>
              <CheckSquare/>
            1/4</p>
        </div>
      
    </div>
  )
}

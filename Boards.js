import React, { useState } from 'react';
import'./Boards.css';
import Card from './Card/Card';
import Dropdown from './DropDown/dropdown';
import {MoreHorizontal} from 'react-feather';
import Editable from './editable/Editable';
function Boards (props) {
const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='board'>
      <div className="board_top">
        <p className='board_top_title'>{props.boards?.title} <span>{`${props.boards?.cards?.length}`}</span>
        </p>
        <div className="board_top_more" onClick={()=>setShowDropdown(true)}>
        <MoreHorizontal/>
        {
          showDropdown && (
        <Dropdown onClose={()=>setShowDropdown(false)}>
          <div className="board_dropdown">
          <p onClick={()=>props.removeBoards(props.card?.id)}>Delete Board</p>

          </div>
        </Dropdown>

          )}
        </div>
        
      </div>
      <div className="board_cards custom-scroll">
        {
          props.boards?.cards?.map((item) =>{
            <Card key = {item.id}
            card={item}
            removeCard = {props.removeCard}
            boardsId={props.Boards?.id}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}/>
          })
        }
        
        
      <Editable displayClass="boards_cards_add"
      text="Add Card"
      placeholder = "Enter Card Title"
      onSubmit={(value)=>props.addCard(value.props.boards?.id)}
      />
      </div>
    </div>
  );
}
export default Boards;

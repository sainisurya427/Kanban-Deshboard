import React, { useState } from 'react'
import './Editable.css';
export default function Editable(props) {
    const [showEdit, setShowEdit]=useState(false);
    const [inputValue, setInputValue]= useState(  "")
  return (
    <div className='editable'>
        {
            showEdit ?(
            <form className={`editable_edit ${props.editClass || "" }`} onSubmit={(Event)=>{
                Event.preventDefault()
                if(props.onSubmit)props.onSubmit(inputValue);
                setShowEdit(false);
                setInputValue('')
                }}>
        <input autoFocus type="text" 
        value={inputValue} onChange= {(e) => setInputValue(e.target.value)} placeholder={props.placeholder || "Enter item"}/>

        <div className="editable_edit_footer">
            <button type='submit'>{ props.buttonText || "Add"}</button>
            < x onClick = {()=>setShowEdit(false)}/>
        </div>
      </form>): (<p className={'editable_display ${props.displayClass  || " "}'} onClick={() =>setShowEdit(true)}>{props.text || "Add item"}</p>)}
    </div>

  );
}

import React,{useEffect} from 'react'

export default function Dropdown(props) {
    const dropdownRef=()=>{}
    
    const handleClick= (event)=>{
        if(dropdownRef && !dropdownRef?.current?.contains(event.target)){
           if(props.onClose) props.onClose();
        }
    };
    
    useEffect(()=>{
        document.addEventListener('click',handleClick)

        return()=>{
            document.removeEventListener('click',handleClick)
        }
    })
  return (
    <div ref={dropdownRef} className=" dropdown" style={{position:"absolute",
    top:"100%",
    right:"0"
    }}>
      {props.children}
    </div>
  )
}

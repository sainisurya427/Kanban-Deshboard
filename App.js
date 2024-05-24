import React, { useState } from 'react'
import './App.css';
import Boards from './components/Boards';

function App() {
  const [boards,setBoards ]= useState([
    {
      id:Date.now() + Math.random()*2,
      title: "To Do",
      
      cards:[
        {
          id:Date.now() + Math.random(),
          title:"card 1",
          tasks:[],
          labels:[{
            text:"frontend",
            color:"lightgreen"
          }],
          desc:"saurabh saini",
          date:"",
        },
        {
          id:Date.now() + Math.random(),
          title:"card 2",
          tasks:[],
          labels:[{
            text:"backend",
            color:"blue"
          }],
          desc:"saurabh saini",
          date:"",
        },
      ]  
    }
  ]);

  const [target, setTarget]=useState({
    cid:"",
    bid:"",
  });

  const addCard = (title, bid)=>{
    const card={
      id:Date.now() + Math.random(),
      title,
      labels:[],
      tasks:[],
      date:"",
      desc:"",
    };
    const index= boards.findIndex(item=>item.id===bid)
    if(index<0) return;
    const tempBoards = [...boards]
    tempBoards[index].cards.push(card);
    setBoards(tempBoards);

  };

  const removeCard=(cid, bid)=>{
    const bIndex = boards.findIndex((item) =>item.id===bid)
    if(bIndex<0) return;

    const cIndex = boards[bIndex].cards.findIndex((item) =>item.id===bid)
    if(cIndex<0) return;

    const tempBoards = [...boards]
    tempBoards[bIndex].cards.splice(cIndex, 1);
    setBoards(tempBoards);
  };
  const addBoard = (title) =>{
    setBoards([
    ...Boards,
    {
      id:Date.now() + Math.random(),
      title,
      cards:[],
    },

  ]);
};

const removeBoard = bid =>{
  const tempBoards= boards.filter(item=>item.id!==bid)
  setBoards(tempBoards);
    
};


const handleDragEnd =(cid, bid)=>{
  let source_bIndex, source_cIndex, target_bIndex, target_cIndex

  source_bIndex = boards.findIndex(item=>item.id===bid);
  if(source_bIndex < 0) return;

  source_cIndex = boards[source_bIndex].cards?.findIndex(item=>item.id===cid);
  if(source_cIndex < 0)return;

  target_bIndex = boards.findIndex(item=>item.id===target.bid);
  if(target_bIndex < 0) return;

  target_cIndex = boards[source_bIndex].cards?.findIndex(item=>item.id===target.cid);
  if(target_cIndex < 0)return;

const tempBoards=[...boards]
const tempCard= tempBoards[source_bIndex].cards[source_cIndex];

tempBoards[source_bIndex].cards.splice(source_cIndex, 1);
tempBoards[target_bIndex].cards.splice(target_cIndex, 0 ,tempCard);

setBoards(tempBoards);

};
const handleDragEnter=(cid,bid)=>{
setTarget({
  cid,
  bid,
});
};
  return (
    <div className='app'>
        <div className="app_navbar">
            <h2>Kanban</h2>
        </div>
        <div className="app_outer">
            <div className="app_boards">
                 
                {
                  boards.map((item)=><Boards
                  key= {item.id} boards={item}
                  removeBoard= {removeBoard}
                  addCard = {addCard}
                  removeCard={removeCard}
                  handleDragEnd={handleDragEnd}
                  handleDragEnter={handleDragEnter}
                  />)
                }
                <div className="app_boards_board">

               <Editable  displayClass = "app_boards_board_add" text = "Add Board" placeholder = 'enter board title' 
               onSubmit = {(value=>addBoard(value))} /> 
                </div>
              
            </div>
        </div>
    </div>
  );
}
export default App;

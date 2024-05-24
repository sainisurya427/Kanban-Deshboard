
import React from 'react'
import ReactDom from "react-dom"

// export default function Index ()  {
//   return (
//     <div>
//       <h1>hello world saurabh saini</h1>;
//     </div>
//   )
// }
const Index = ( ) =>{
  return React.createElement('h1', {}, "saurabh saini")
}
ReactDom.render(<Index/>, document.getElementById('root'));

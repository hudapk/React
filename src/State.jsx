import React, { useState } from "react";

function State() {
  // decalred, intialisation

  const [State, setState] = useState(100);



  return (
   
    <div>
      {State}
      <br/>
      <button onClick={()=>{setState(State+1)}}>+</button> 
      <button onClick={()=>{setState(State-1)}}>-</button> 
           
</div>
  )
}

export default State
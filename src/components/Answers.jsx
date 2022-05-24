import React from "react";

const Answer =({name, place, info ={a: 4, b:3 }}) =>{
  return(

  <div>hello from {name}, I'm from {place} 
  {info &&(
  <div>
{info.a} || {info.b}
  </div>
  )}
  </div> 
  ) 
};


export default Answer
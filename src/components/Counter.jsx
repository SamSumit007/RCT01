import React,{ useState }  from "react";

const Counter = ({initialValue}) => {
    // let a = 0;
    const [count, Setcount] = useState(initialValue);

//     const increamentCount = () =>{
// //console.log("pre", count);
// Setcount(count+1);
// //console.log("post", count);
//     };
    

    return(
<div>
<h1>Counter Add: {count}</h1>
<button onClick={() =>{ Setcount(count+1)}}>Increment</button>
<button onClick={() =>{
    if (count>0){
        Setcount(count-1); }
}}>Decreament</button>

</div>




    )
}
export default Counter
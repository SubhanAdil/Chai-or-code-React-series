import "./App.css";
import { useState } from "react";
import Card from "./Components/Card";


function App() {
/*
let [add,newadd]=useState(15)

  
  //const fixed chez ke lie use lrte
const adding =()=> {
 // add= add+1;
  newadd( add =add+1)
  console.log("Value Added", add);
//  console.log("Value Added", Math.random());
}

const removed =()=>
{
  //newadd(Math.remove)
  newadd(add - 1)

console.log("Value is Removed" , add);

}
*/
let makingObj=
{
username:"subhan",
age : 20
}
let newArr =[1,2,3,4]

  return (
    <>
<Card someValue="card file me prop use kia hai"    koiBhName ={makingObj} koiBhArr={newArr}/>
<Card  BtnTxt="CLICK ME"/>


  </>
  );
}

export default App;

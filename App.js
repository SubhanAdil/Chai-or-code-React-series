import "./App.css";
import { useState } from "react";


function App() {
let [value,changeValue] = useState(15)
//INTERVIEW QUESTION
 const increasefun = ()=> {
//value =value +1;
//changeValue( value + 1)//16 hoegi value
//changeValue( value + 1)//yha pe bh 16 hoegi value
//changeValue( value + 1)//yha pe bh 16 hoegi value

 //INTERVIEW QUESTION
 // is ke under arrow fun use krne se abh jo change hogyi value wo lega then +1 add krde ga
 changeValue(puranivalue => puranivalue +1)
 changeValue(puranivalue => puranivalue +1)

console.log( "value Increase" + value);

}
const decreasefun = () => {
  
  value =value -1;
  
   changeValue(value)
  console.log( "value Decrease " + value);
}

  return (
    <>
    <div style={{textAlign:"center", padding:300}}>
<button  onClick={increasefun}>INCREASE VALUE {value}</button>
<br />
<button onClick={decreasefun}>DECREASE VALUE {value}</button>
</div>

  </>
  );
}

export default App;

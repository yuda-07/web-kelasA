import { useState } from "react";
import './style.css'
function App(){
    let [count, setCount] = useState(0);

   return (
       <div>
           <h1 className="typography">Counter: {count}</h1>
           <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
   );
}

import React, {useState} from "react";

const Counter = () => {

    const [count, setCouner] = useState(0);

    function increase () {
        setCouner (count + 1);
      }
    
    function decrease () {
        setCouner (count - 1);
      }

      return (

          <div className="counter">
              <h1>{count}</h1>
              <button onClick={increase}>+</button>
              <button onClick={decrease}>-</button>
          </div>
      )
}

export default Counter;
import React , {useState} from "react";

const HandlingEvent = () => {
    const [count , setCount] = useState(0);

    count = () => {
    setCount(count + 1);
};

return {
    <div>
    <p>Count: {count}</p>
    <button onClick>{handleButtonClick}>Increment Count</button>
    </div>
};

};


import React, {useState} from 'react';

const ChildComponent = ({onMessageChange}) => {
    const [inputMessage, setInputMessage] = useState('');

   const handleInputChange = (e) => {
      setInputMessage(e.target.value)
      onMessageChange(e.target.value)
   }

     return (
        <div>
            <input type="text" value={inputMessage} onChange={handleInputChange}/>
        </div>
     );

};

export default ChildComponent

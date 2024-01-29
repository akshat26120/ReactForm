import React,{useState, useEffect} from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [message, setMessage] = useState('');

    
    const handleMessageChange = (newMessage) => {
        setMessage(newMessage);
    };

    return (    
            <div>
                <ChildComponent onMessageChange={ handleMessageChange} />
                <p><b>Parent Message: {message}</b></p>
            </div>
     )
};

export default ParentComponent

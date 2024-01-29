import React, { useState } from "react";

const FormComponent = () => {
    const [FullName, setFullName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const handleFullName = (e) => {
            // const eventVal = e.target.value;
            setFullName(e.target.value);
    }
    const handleEmail = (e) => {
        // const eventVal = e.target.value;
        setEmail(e.target.value);
}
const handlePassword = (e) => {
    // const eventVal = e.target.value;
    setPassword(e.target.value);
}
const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log({
        FullName,
        Email,
        Password,
    })
}
    
    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleFormSubmit}> 
                <div> 
                    <input type="text" placeholder="Full Name" value={FullName} onChange={handleFullName}/>
                </div>
                <div>
                    <input type="email" placeholder="Email" value={Email} onChange={handleEmail}/> 
                </div>
                <div>
                    <input type="password" placeholder="Password" value={Password} onChange={handlePassword}/>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
               
               
               
                
            </form>
        </div>
    )
}

export default FormComponent;
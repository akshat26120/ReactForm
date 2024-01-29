import React, { useState } from "react";

const RegisterPart2 = () => {
    const [formData, setFormData] = useState(
        { 
            fullName: "",
            email: "", 
            password: ""
        }
        );

    const formHandler = (e) => {
      
      
        console.log(e.target.value)
    }

  return (
    <div>
      <h2>Register Form</h2>
      <form>
        <div>
          <input
            onChange={formHandler}
            value={formData.fullName}
            placeholder="fullname" 
            type="text" />
            
        </div>
        <div>
          <input             
          onChange={formHandler}
          value={formData.email}
            placeholder="email" 
            type="email" />
        </div>
        <div>
          <input 
            onChange={formHandler}
            value={formData.password}
            placeholder="password" 
            type="password" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPart2;

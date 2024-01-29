import React, {useState} from "react";

const Register = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        date: "",
    })
  const [preDta, setPreDta] = useState([])
  
    const onHandleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.type]:e.target.value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        
        const newFormData = {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
            date: formData.date,
          };
 
          setPreDta((prevData) => [...prevData, newFormData]);

        setFormData({
            fullName: "",
            email: "",
            password: "",
            date: "",
        })
    }
    
  return (
    <div >
      <div className="box">
      <form  onSubmit={submitHandler}>
        <div className="set">
            <h4>Full Name<sup>*</sup>
          <input value={formData.fullName} onChange={onHandleChange} placeholder="Full Name" type="text"  name="fullName" />
          </h4>
        </div>
        <div className="set">
        <h4>Email<sup>*</sup>
          <input value={formData.email} onChange={onHandleChange} placeholder="Email" type="email" name="email"/>
        </h4>
        </div>
        <div className="set">
        <h4>Password<sup>*</sup>
          <input value={formData.password} onChange={onHandleChange} placeholder="Password" type="password" name="password" />
        </h4>
        </div>
        <div className="set">
        <h4>Date<sup>*</sup><br/>
          <input value={formData.date} onChange={onHandleChange} placeholder="Date" type="Date" name="Date" />
        </h4>
        </div><br/>
        <button type="submit" className="button-19">Sign In</button>
      </form>
  </div>

 {/* Display the array of objects on the screen */}
 <div className="box2">
 <div className="output">
        <h2>Form Submissions:</h2>
        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {preDta.map((data, index) => (
              <tr key={index}>
                <td>{data.fullName}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
       

       
        
    
 </div>
</div>
</div>

  );
};


export default Register;

// import React, { useState } from 'react'

// function Asm() {

  
//   return (
//    <div>
//     <label > username:</label><br/>
//     <input type="text" />

//     <label > password:</label><br/>
//     <input type="text" />

//     <label > comfrom password:</label><br/>
//     <input type="text" />

//     <label >email:</label><br/>
//     <input type="text" />

//     <button onClick={ButtonHandular}>submit</button>
//    </div>
//   )
// }

// export default Asm




import React, { useState } from 'react';

function Asm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateInput(name, value),
    }));
  };

  const validateInput = (name, value) => {
    if (name === 'username') {
      return value.trim() === '' ? 'Username is required' : ' ';
    }
   
    if (name === 'password') {
      return value.length < 6 ? 'Password must be at least 6 characters long' : '';
    }

    if (name === 'confirmPassword') {
      return value !== formData.password ? 'Passwords do not match' : '';
    }

    if (name === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Invalid email address';
    }

    return '';
  };

  return (
    <div>
      <label>Username:</label><br />
      <input type="text" name="username" value={formData.username} onChange={handleChange} />
      {errors.username && <div className="error" style={{color:'red'}}>{errors.username}</div>}<br />

      <label>Password:</label><br />
      <input type="password" name="password" value={formData.password} onChange={handleChange} />
      {errors.password && <div className="error">{errors.password}</div>}<br />

      <label>Confirm Password:</label><br />
      <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}<br />

      <label>Email:</label><br />
      <input type="text" name="email" value={formData.email} onChange={handleChange} />
      {errors.email && <div className="error">{errors.email}</div>}<br />
    </div>
  );
}

export default Asm;

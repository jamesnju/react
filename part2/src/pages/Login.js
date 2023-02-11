import React, { useState } from 'react';
import "../style/Login.css";

function Login(props) {
  const [student, setStudent] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
  }
  return (
    <div className="home">
     <h1>REGISTER LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <label htmlfor="studentnumber">studentnumber</label><br/>
        <input value={student} onChange={(e) => setStudent(e.target.value)}type="text" name="studentnumber" maxLength="20" /><br/>
        <label htmlfor="student password">studentpassword</label><br/>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name='password' maxLength='30' /><br/>
        <button type="submit">Log in</button><br/>
        <button className="link-btw" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button><br/>
      </form>
    </div>
  );
}

export default Login;

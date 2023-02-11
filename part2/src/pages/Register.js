import React, { useState } from 'react';
import "../style/Login.css";

 function Register(props) {
  const [student, setStudent] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] =useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(student);
  }
  return (
    <div className='home'>
      <h2>REGISTER</h2>
      <form onSubmit={handleSubmit}>
        <label htmlfor="full name">full name</label><br/>
        <input value={name} onChange={(e) => setName(e.target.value)} type='text'name='name' id='name' placeholder='name'/><br/>
        <label htmlfor="studentnumber">studentnumber</label><br/>
        <input value={student} onChange={(e) => setStudent(e.target.value)}type="text" name="studentnumber" maxLength="20" /><br/>
        <label htmlfor="student password">studentpaassword</label><br/>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name='password' maxLength='30' /><br/>
        <button type="submit">Log in</button><br/>
        <button className="link-btw" onClick={() => props.onFormSwitch('login')}>Already have an account? log in here.</button>
      </form>
    </div>
  );
}

export default Register;

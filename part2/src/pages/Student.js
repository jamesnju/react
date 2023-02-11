import React, { useState } from 'react';
import '../style/Student.css';

const Student = () => {
  const [student, setStudent] = useState({
    name: '',
    id: ''
  });

  const [students, setStudents] = useState([]);

  const handleChange = (event) => {
    setStudent({
      ...student,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStudents([...students, student]);
    setStudent({ name: '', id: '' });
  };

  return (
    <div>
      <div className='header'>
        <p className='header-text'>Total Students: {students.length}</p>
      </div>
          <h3>ADD NEW STUDENT</h3><hr/>
      <form onSubmit={handleSubmit}>
        <div className='names'>
          <label>FULL NAME</label>
            <input type="text" name="name" value={student.name} onChange={handleChange} placeholder='Enter student name' required autoFocus/>
          <br/>
          <label>STUDENT ID</label>
            <input type="text" name="id" value={student.id} onChange={handleChange} placeholder='StudentNumber' required/>
          <br />
          <button type="submit">Add Student</button>
        </div>  
      </form>
      <h3>STUDENT DETAILS</h3>
      <table className='student-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {students.map(({ name, id }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;

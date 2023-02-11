import React, { useState } from 'react';
import Student from './Student';

const Dashboard = ({ students }) => {
  return (
    <div className='header'>
      <p className='header-text'>Total Students: {students.length}</p>
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

export default Dashboard;

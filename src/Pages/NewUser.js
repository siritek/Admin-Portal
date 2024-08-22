
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css';

const NewUser = () => {
  const [componentData, setComponentData] = useState({
    firstName: "",
    username: "",
    password: "",
    company: "",
    lastName: "",
    email: "",
    role: ""

  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setComponentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const jsonData = {
      firstName: componentData.firstName,
      username: componentData.username,
      password: componentData.password,
      company: componentData.company,
      lastName: componentData.lastName,
      email: componentData.email,
      role: componentData.role
    };
  
    try {
      const response = await fetch('http://localhost:8080/users/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log('User created successfully:', result);
      } else {
        const errorData = await response.text();
        console.error('Error creating user:', response.statusText, errorData);
      }
    } catch (error) {
      console.error('Network error:', error);
    }
  };
  
  return (
    <div className="container-page">
      <h1 className="mb-4">Create a New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
          <div className="col-sm-4">
            <input
              id="firstName"
              type="text"
              value={componentData.firstName}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
          <div className="col-sm-4">
            <input
              id="lastName"
              type="text"
              value={componentData.lastName}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="company" className="col-sm-2 col-form-label">Company Name</label>
          <div className="col-sm-4">
            <input
              id="company"
              type="text"
              value={componentData.company}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="role" className="col-sm-2 col-form-label">Role</label>
          <div className="col-sm-4">
            <input
              id="role"
              type="text"
              value={componentData.role}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="email" className="col-sm-2 col-form-label">Personal Email</label>
          <div className="col-sm-4">
            <input
              id="email"
              type="text"
              value={componentData.email}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-4">
            <input
              id="username"
              type="text"
              value={componentData.username}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-4">
            <input
              id="password"
              type="text"
              value={componentData.password}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 offset-sm-2">
            <button type="submit" className="btn btn-primary">Create New User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUser;

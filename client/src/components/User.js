import React from 'react'
import { useSelector } from 'react-redux'

export default props => {
  const user = props.pers
  
  return (
    <div className="user">
      <div className="photo">
        <img src={user.image} alt="user_picture" />
      </div>
      <div className="details">
        <div className="name">
          <h6>Name: </h6>
          <p>{user.fname} {user.lname} </p>
        </div>
        <div className="phone">
          <h6>Phone: </h6>
          <p>{user.phone}</p>
        </div>
        <div className="email">
          <h6>Email: </h6>
          <p>{user.email}</p>
        </div>
      </div>
    </div>
  )
}
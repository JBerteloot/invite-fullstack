import React from 'react'

export default props => {
  
  return (
    <div className="user">
      <div className="photo">
        <img src={props.pers.picture.large} alt="user_picture" />
      </div>
      <div className="details">
        <div className="name">
          <h6>Name: </h6>
          <p>{props.pers.name.first} {props.pers.name.last} </p>
        </div>
        <div className="phone">
          <h6>Phone: </h6>
          <p>{props.pers.phone}</p>
        </div>
        <div className="email">
          <h6>Email: </h6>
          <p>{props.pers.email}</p>
        </div>
      </div>
    </div>
  )
}
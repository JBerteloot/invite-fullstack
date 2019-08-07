import React from 'react'
import User from "./User"
import {useSelector} from "react-redux"
import { Link} from "react-router-dom"


export default props => {
  const notGoing = useSelector(appState => appState.notGoing)

  return (
    <div id="notgoing">
      <div className="back">
        <Link to="/">Back to Invite</Link>
        <h1>Not Going</h1>
      </div>
      <div className="notgoing">
        {notGoing.map((user, i) => (
          <User key={"user" + i} pers={user} />
        ))}
      </div>
    </div>
  )
}
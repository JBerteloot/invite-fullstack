import React from 'react'
import User from "./User"
import {useSelector} from "react-redux"
import { Link} from "react-router-dom"


export default props => {
  const going = useSelector(appState => appState.going)

  return (
    <div id="going">
      <div className="back">
        <Link to="/">Back to Invite</Link>
        <h1>Going</h1>
      </div>
      <div className="going" >
        {going.map((user, i) => (
        < User key={"user" + i} pers={user} />
        ))}
      </div>
    </div>
  )
}
import React, {useEffect} from 'react'
import User from "./User"
import {useSelector} from "react-redux"
import {generate, going, notGoing} from "../actions/actions"


export default props => {
  const users = useSelector(appState => appState.users)

  useEffect (() => {
    generate()
  }, []) 

  function yes(props) {
    console.log(users[0])
    going(users[0])
  }

  function no(props) {
    notGoing(users[0])
  }

  const cGoing = going.length
  const cNotGoing = notGoing.length

  return (
    <div className="invite">
        <div className="inventory">
          <button>Going: {cGoing}</button>
          <button>Not Going: {cNotGoing}</button>
        </div>
        
        {users.map((user, i) => (
          <User pers={user} />
        ))}
      
      <div className="buttons">
        <button className="no" type="button" onClick={no}>&#10005;</button>
        <button className="yes" type="button" onClick={yes}>&#10003;</button>
      </div>
    </div>
  )
}
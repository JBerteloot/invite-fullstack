import React, {useEffect} from 'react'
import User from "./User"
import {useSelector} from "react-redux"
import {getNotGoing} from "../actions/actions"


export default props => {
  const notGoing = useSelector(appState => appState.notGoing)

  useEffect (() => {
    getNotGoing()
  }, []) 


  return (
    <div className="notgoing">
      {notGoing.map((user, i) => (
        <User pers={user} />
      ))}
    </div>
  )
}
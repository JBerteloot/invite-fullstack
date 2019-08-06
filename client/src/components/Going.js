import React, {useEffect} from 'react'
import User from "./User"
import {useSelector} from "react-redux"
import {getGoing} from "../actions/actions"


export default props => {
  const going = useSelector(appState => appState.going)

  useEffect (() => {
    getGoing()
  }, []) 


  return (
    <div className="going">
      {going.map((user, i) => (
        <User pers={user} />
      ))}
    </div>
  )
}
import React, {useEffect, useState} from 'react'
import User from "./User"
import {useSelector} from "react-redux"
import {generate, going, notGoing} from "../actions/actions"
import { Link} from "react-router-dom"


export default props => {
  const user = useSelector(appState => appState.new)
  const goingUsers = useSelector(appState => appState.going)
  const notGoingUsers = useSelector(appState => appState.notGoing)
  const [disabled, setDisabled] = useState(false)

  useEffect (() => {
    generate(user.id)
    setDisabled(false)
  }, [user.id]) 

  function yes() {
    going(user)
    setDisabled(true)
  }

  function no() {
    notGoing(user)
    setDisabled(true)
  }

  return (
    <div className="invite">
        <div className="inventory">
        <Link to="/going"><button>Going: {goingUsers.length}</button></Link>
        <Link to="/notgoing"><button>Not Going: {notGoingUsers.length}</button></Link>
        </div>
          <User pers={user}/>
        <div className="buttons">
          <button className="no" type="button"  onClick={no}>&#10005;</button>
          <button className="yes" type="button" onClick={yes}>&#10003;</button>
        </div>
    </div>
  )
}


/*    
  <Route exact path="/" component={MyAlbums} />
  <Route exact path="/Album/:id" component={Album} />
  <Route path="/Photo/:id" component={Photo} />
*/
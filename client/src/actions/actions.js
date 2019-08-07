import store from '../store'
import axios from 'axios'
import shortid from 'shortid'

init()

function init() {
  axios.get("/api/going").then(resp => {
    getGoing(resp.data)
  })
  axios.get("/api/notgoing").then(resp => {
    getNotGoing(resp.data)
  })
}

export function getGoing() {
  axios.get("/api/going").then(resp => {
    store.dispatch({
      type: "GET_GOING",
      payload : resp.data
    })
  })
}

export function getNotGoing() {
  axios.get("/api/notgoing").then(resp => {
    store.dispatch({
      type: "GET_NOTGOING",
      payload : resp.data
    })
  })
}

export function generate(id) {
  const appState = store.getState()

  const exists = appState.going.filter(user => user.id === id).length + appState.notGoing.filter(user => user.id === id).length

  const isNewUser = appState.new.id === id && id !== undefined

  if (!exists && !isNewUser) {
    axios.get("/api/invites").then(resp => {
      const user = resp.data.results[0]
      user.id = shortid.generate()

    const pers = {
      id: user.id,
      image: user.picture.large, 
      fname: user.name.first,
      lname: user.name.last,
      phone: user.phone, 
      email: user.email
    }

      store.dispatch({
        type: "GENERATE",
        payload : pers
      })
    })
  }
}

//this could have also be simply without anyneed for router.get("/invites")...axios... in /routes/index.js: 
// export function getNewUser() {
//   axios.get("https:/randomuser.me/api").then(resp => {
//     store.dispatch({
//       type: "GET_NEw_USER",
//       payload: user
//     })
//   })
// }

export function notGoing(user) {
  axios.post("/api/mark-invitee", {user: user, going: false}).then(resp => {
      store.dispatch({
        type: "ADD_NOTGOING",
        payload : user
      })
  
  })
}

export function going(user) {
  axios.post("/api/mark-invitee", {user: user, going: true}).then(resp => {
      store.dispatch({
        type: "ADD_GOING",
        payload : user
      })
  
  })
}





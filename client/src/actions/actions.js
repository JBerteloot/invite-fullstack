import store from '../store'
import axios from 'axios'



export function generate() {
  axios.get("/api/invites").then(resp => {
    store.dispatch({
      type: "GENERATE",
      payload : resp.data.results
    })
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

export function going(user) {
  axios.post("/api/mark-invitee", {user: user, going: true}).then(resp => {
    axios.get("/api/going").then(res => {
      store.dispatch({
        type: "GET_GOING",
        payload : res.data
      })
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


export function notGoing(user) {
  axios.post("/api/mark-invitee", {user: user, going: false}).then(resp => {
    axios.get("/api/notgoing").then(res => {
      store.dispatch({
        type: "GET_NOTGOING",
        payload : res.data
      })
    })
  })
}


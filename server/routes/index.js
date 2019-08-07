const router = require('express').Router()
const axios = require("axios")

const going = []
const notGoing = []

//this is for export generate() in actions.js
router.get("/invites", (req, res, next) => {
  axios.get("https://randomuser.me/api").then(resp => {
  res.json(resp.data) 
  })
})

router.get("/going", (req, res, next) => {
  res.json(going)
})  

router.get("/notgoing", (req, res, next) => {
  res.json(notGoing)
})

router.post("/mark-invitee", (req, res, next) => {
  const user = req.body.user
  const userGoing = req.body.going

  if (userGoing) {
    going.push(user)
  } else {
    notGoing.push(user)
  }
  res.json({
    message: "user added"
  })
})

module.exports = router



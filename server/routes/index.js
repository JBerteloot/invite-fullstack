const router = require('express').Router()
const axios = require("axios")

/*code here*/

const going = []
const noGoing = []

router.post("/mark-invitee", (req, res) => {
  const user = req.body.user
  const userGoing = req.body.going
  console.log(user)

  if (userGoing) {
  going.push(user)
  } else {
    noGoing.push(user)
  }
  res.json({
    message: "user added"
  })
})

router.get("/going", (req, res, next) => {
  res.json(going)
})

router.get("/notgoing", (req, res, next) => {
  res.json(noGoing)
})

router.get("/invites", (req, res, next) => {
  axios.get("https://randomuser.me/api").then(resp => {
  res.json(resp.data)
  })
})

module.exports = router


/*    
  <Route exact path="/" component={MyAlbums} />
  <Route exact path="/Album/:id" component={Album} />
  <Route path="/Photo/:id" component={Photo} />
*/
module.exports = {
  userAuth: (req, res, next) => {
    if(req.headers.signin == req.params.id) {
      next()
    } else {
      res.status(403).send({
        message: "you're not the owner of the task"
      })
    }
  }
}
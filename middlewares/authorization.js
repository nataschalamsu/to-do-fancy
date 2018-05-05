module.exports = {
  userAuth: (req, res, next) => {
    if(req.headers.role == 'user') {
      next()
    } else {
      res.status(403)
    }
  }
}
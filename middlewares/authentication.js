const jwt = require('jsonwebtoken')

module.exports = {
  checkLogin: (req, res, next) => {
    if(req.headers.token) {      
      jwt.verify(req.headers.token, process.env.SECRET, (err, login) => {
        if(err) {
          res.send(err)
        } else {
          console.log(login);
          
          req.headers.signin = login.userId
          next()
        }
      })
    } else {
      res.send('Tidak ada user login')
    }
  }
}
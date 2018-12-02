const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const config = require('../config');
const NAMESPACE = config.NAMESPACE;

// MIDDLEWARE
exports.checkJWT = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 50,
    jwksUri: 'https://eincode.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'NfvS9nw81ItncHJKPHCaAvwD9ChNWYn3',
  issuer: 'https://eincode.eu.auth0.com/',
  algorithms: ['RS256']
})


exports.checkRole = role => (req, res, next) => {
  const user = req.user;

  if (user && user[NAMESPACE + '/role'] && (user[NAMESPACE + '/role'] === role)) {
    next();
  } else {
    return res.status(401).send({title: 'Not Authorized', detail: 'You are not authorized to access this data'})
  }
}




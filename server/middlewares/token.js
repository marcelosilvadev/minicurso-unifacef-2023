const { verify } = require("jsonwebtoken");
const { Unauthorized } = require("../errors");


module.exports = (req, resp, next) => {
  const {key} = require("../../config/environment").security.jwt;
  const token = extractToken(req);
  if(token){
    verify(token, key, function (err, decoded){
      if (err){
        throw new Unauthorized('Token Inválido!')
      }
      req.authenticated = decoded;
    })
    next()
  } else {
    next()
  }
}

function extractToken(req){
  let token = undefined;
  const authorization = req.header("authorization");
  if(authorization){
    const parts = authorization.split(" ");
    if(parts.length === 2 && parts[0] === "Bearer"){
      token = parts[1];
    }
    return token
  }
}

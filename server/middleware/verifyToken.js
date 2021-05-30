require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.authToken = async (req, res, next) => {
  // Se obtiene el token de los headers
  let token = req.headers.authorization;

  // Confirma si hay presencia de token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // Obtiene un array del token recibido
  const TokenArray = token.split(" ");

  // Verifica el token
  try {
    const decoded = jwt.verify(TokenArray[1], process.env.JWT_SECRET);
    // Establece el id del usuario que esta en sesión
    req.user = {_id: decoded._id};
    next();
  } catch (err) {
    console.log(err + " token is not valid || something wrong with token");
    res.status(500).json({ msg: "Server Error" });
  }
};
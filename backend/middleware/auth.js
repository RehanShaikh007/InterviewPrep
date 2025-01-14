import jwt from "jsonwebtoken";

const AuthMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({
      error: "Access Denied, Token is missing",
    });
  }

  if (!token.startsWith("Bearer ")) {
    return res.status(400).json({
      error: 'Invalid token format, it should start with "Bearer "',
    });
  }

  try {
    const verified = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({
      error: "Invalid or expired token",
    });
  }
};

export default AuthMiddleware;

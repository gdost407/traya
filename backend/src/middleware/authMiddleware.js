import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export default function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Missing token" });

  const [, token] = authHeader.split(" ");
  if (!token) return res.status(401).json({ error: "Missing token" });

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
}
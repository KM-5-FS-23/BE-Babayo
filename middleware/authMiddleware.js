const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key');
    req.user = { id: decoded.user_id, role: decoded.role || 'user' };
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Authentication failed' });
  }
};
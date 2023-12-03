const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Masukkan token!' });
  }

  try {
    const decoded = jwt.verify(token, 'babayoo!!!');
    req.user = { user_id: decoded.user_id, role: decoded.role || 'user' };
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token expired!' });
  }
};
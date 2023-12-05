const jwt = require('jsonwebtoken');

exports.authenticateUser = (req, res, next) => {
  const tokenHeader = req.header('Authorization');

  if (!tokenHeader) {
    return res.status(401).json({ message: 'Masukkan token!' });
  }

  try {
    const token = tokenHeader.replace('Bearer ', '');
    const decoded = jwt.verify(token, 'babayoo!!!');
    req.user = { user_id: decoded.user_id, role: decoded.role || 'user' };
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Token expired!' });
  }
};
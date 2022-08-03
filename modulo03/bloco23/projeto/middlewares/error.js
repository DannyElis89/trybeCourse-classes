const middlewareErrors = (error, req, res, _next) => {
  res.status(error.status || 500).json({ error: error.message });
};

module.exports = middlewareErrors;

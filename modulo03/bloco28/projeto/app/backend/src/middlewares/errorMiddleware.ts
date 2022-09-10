import { StatusCodes } from 'http-status-codes';
import { ErrorRequestHandler } from 'express';

const errorMiddleware: ErrorRequestHandler = async (err, _req, res, _next) => {
  const { status, message } = err;

  if (!status) {
    return res.status(
      StatusCodes.INTERNAL_SERVER_ERROR,
    ).json({ message });
  }

  return res.status(status).json({ message });
};

export default errorMiddleware;

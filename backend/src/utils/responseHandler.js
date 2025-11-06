export const successResponse = (res, data = {}, message = "Success", code = 200) => {
  return res.status(code).json({ success: true, message, ...data });
};

export const successFalse = (res, data = {}, message = "Error", code = 200) => {
  return res.status(code).json({ success: false, message, ...data });
};

export const errorResponse = (res, message = "Error", code = 400) => {
  return res.status(code).json({ success: false, message });
};

export const badRequest = (res, message = "Bad Request") =>
  errorResponse(res, message, 400);

export const unauthorized = (res, message = "Unauthorized") =>
  errorResponse(res, message, 401);

export const forbidden = (res, message = "Forbidden") =>
  errorResponse(res, message, 403);

export const notFound = (res, message = "Not Found") =>
  errorResponse(res, message, 404);

export const conflict = (res, message = "Conflict") =>
  errorResponse(res, message, 409);

export const internalError = (res, message = "Internal Server Error") =>
  errorResponse(res, message, 500);


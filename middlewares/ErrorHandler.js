const path = require("path");
const ErrorHandler = (err, req, res, next) => {
  console.log("Middleware Error Handling");
  const errStatus = err.statuscode || 500;
  const errMsg = err.message || "something went wrong";
  //   res.status(errStatus).json({
  //     success: false,
  //     status: errStatus,
  //     message: errMsg,
  //   });
  res.sendFile(path.join(__dirname + "./../views/error.html"));
};

module.exports = ErrorHandler;

const ErrorResponse = require('../utils/errorResponse')

const errorHandler = (err, req, res, next) => {
    let error = { ...err }
    console.log(err.stack)

    error.message = err.message

    // Mongoose bad ObjectID
    if (err.name === 'CastError') {
        const message = `Resource not found with id of ${err.value}`;
        error = new ErrorResponse(message, 404)
    }

    // Mongoose dubs key
    if (err.code === 11000) {
        const message = `Duplicate field value entered`
        error = new ErrorResponse(message, 400)
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server error'
    })
}

module.exports = errorHandler;
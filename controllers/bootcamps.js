const Bootcamp = require('../models/Bootcamp')
const ErrorResponse = require('../utils/errorResponse')

exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({
            data: bootcamps
        })
    } catch (e) {
        next(e)
    }
}


exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)

        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
        }

        res.status(200).json({
            data: bootcamp
        })
    } catch (e) {
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
    }
}

exports.createBootcamp = async (req, res, next) => {
    try {
        const newBootcamp = await Bootcamp.create(req.body)

        res.status(201).json({
            data: newBootcamp,
        })
    } catch (e) {
        next(e)
    }
}

exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
        }

        res.status(200).json({ data: bootcamp })
    } catch (e) {
        next(e)
    }
}

exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if (!bootcamp) {
            return next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404))
        }

        res.status(200).json({ data: {} })
    } catch (e) {
        next(e)
    }
}
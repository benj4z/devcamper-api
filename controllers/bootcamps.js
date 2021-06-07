const Bootcamp = require('../models/Bootcamp')

exports.getBootcamps = async (req, res, next) => {
    try {
        const bootcamps = await Bootcamp.find()
        res.status(200).json({
            data: bootcamps
        })
    } catch (e) {
        res.status(400).json({error: e})
    }
}


exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)

        if (!bootcamp) {
            return res.status(400).json({
                message: 'Not found'
            })
        }

        res.status(200).json({
            data: bootcamp
        })
    } catch (e) {
        res.status(404)
    }
}

exports.createBootcamp = async (req, res, next) => {
    try {
        const newBootcamp = await Bootcamp.create(req.body)

        res.status(201).json({
            data: newBootcamp,
        })
    } catch (e) {
        res.status(400).json({
            error: e
        })
    }
}

exports.updateBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        if (!bootcamp) {
            return res.status(400).json({message: 'error'})
        }

        res.status(200).json({ data: bootcamp })
    } catch (e) {
        res.status(400)
    }
}

exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

        if (!bootcamp) {
            return res.status(400).json({message: 'error'})
        }

        res.status(200).json({ data: {} })
    } catch (e) {
        res.status(400)
    }
}
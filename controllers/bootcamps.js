const Bootcamp = require('../models/Bootcamp')

exports.getBootcamps = async (req, res, next) => {
   try {
       const newBootcamp = Bootcamp.create(req.body)

       res.status(201).json({
           data: newBootcamp,
       })
   } catch (e) {
       res.status(400).json({
           error: e
       })
   }
}

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show ${req.params.id} bootcamp`})
}

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create new bootcamp'})
}

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update ${req.params.id} bootcamp`})
}

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete ${req.params.id} bootcamp`})
}
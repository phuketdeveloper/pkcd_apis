const Mongoose = require('mongoose')
const Schema   = Mongoose.Schema

const Business = require('./business')

// SCHEMA ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const options = {
  discriminatorKey: 'category'
}

const Attraction = new Schema({
  openTime:  { type: String },
  closeTime: { type: String }
}, options)

module.exports = Business.discriminator('attraction', Attraction)

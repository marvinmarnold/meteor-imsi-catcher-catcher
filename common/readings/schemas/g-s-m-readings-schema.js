GSMReadingsSchema = new SimpleSchema({
  commonReading: {
    type: CommonReadingsSchema
  },
  latitude: {
    type: Number,
    decimal: true,
    optional: true
  },
  longitude: {
    type: Number,
    decimal: true,
    optional: true
  },
  mcc: {
    type: Number,
    optional: true,
  },
  mnc: {
    type: Number,
    optional: true,
  },
  cid: {
    type: Number,
    optional: true,
  },
  lac: {
    type: Number,
    optional: true,
  },
  psc: {
    type: Number,
    optional: true
  },
  signalStrengthDBM: {
    type: Number,
    decimal: true,
    optional: true
  }
})

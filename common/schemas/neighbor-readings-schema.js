import { CommonReadingsSchema } from './common-readings-schema.js';

export const NeighborReadingsSchema = new SimpleSchema({
  commonReading: {
    type: CommonReadingsSchema
  },
  cid: {
    type: Number,
  },
  lac: {
    type: Number,
    optional: true
  },
  psc: {
    type: Number,
    optional: true,
  },
  signalStrengthDBM: {
    type: Number,
    optional: true
  },
  networkType: {
    type: String,
    optional: true
  }
})

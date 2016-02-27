BasestationsSchema = new SimpleSchema({
  cid: {
    type: Number
  },
  mcc: {
    type: Number,
    optional: true
  },
  mnc: {
    type: Number,
    optional: true
  },
  lac: {
    type: Number,
    optional: true
  },
  hasNeighbors: {
    type: Boolean
  },
  createdAt: {
    type: Date,
    autoValue() {
      if(this.isInsert) {
        return new Date()
      }
    },
    optional: true
  },
  updatedAt: {
    type: Date,
    autoValue() {
      return new Date()
    },
    optional: true
  },
  lastTelephonyReadingId: {
    type: String
  }
})

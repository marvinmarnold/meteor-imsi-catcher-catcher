CommonReadingsSchema = new SimpleSchema({
  readingType: {
    type: String,
    allowedValues: Catcher.READING_TYPES_ARR
  },
  deviceId: {
    type: String
  },
  deviceScannerId: {
    type: Number
  },
  arfcn: {
    type: Number,
    optional: true
  },
  frequency: {
    type: Number,
    decimal: true,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue() {
      this.unset()
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
  }
})

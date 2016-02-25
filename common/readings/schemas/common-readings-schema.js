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
  },
  debug: {
    type: String,
    optional: true
  }
})

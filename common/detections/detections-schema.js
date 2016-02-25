DetectionsSchema = new SimpleSchema({
  basestationId: {
    type: String
  },
  detectorName: {
    type: String
  },
  score: {
    type: Number
  },
  message: {
    type: String
  },
  longitude: {
    type: Number,
    decimal: true,
    optional: true
  },
  latitude: {
    type: Number,
    decimal: true,
    optional: true
  },
  createdAt: {
    type: Date,
    autoValue() {
      this.unset();
      if(this.isInsert) {
        return new Date();
      }
    },
    optional: true
  }
})

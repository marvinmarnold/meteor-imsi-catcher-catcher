export const DetectionsSchema = new SimpleSchema({
  deviceId: {
    type: String
  },
  isTest: {
    // Set to true if this is for simulating a detection on a device or other debugging
    type: Boolean
  },
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
  },
  readingIds: {
    type: [String]
  }
});

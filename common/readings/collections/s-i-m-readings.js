SIMReadings = new Mongo.Collection("meteor-imsi-catcher-s-i-m-readings");
SIMReadings.attachSchema(SIMReadingsSchema)

_.extend(Catcher, {
  SIMReadings: SIMReadings
})

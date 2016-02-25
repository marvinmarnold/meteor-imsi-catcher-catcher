GSMReadings = new Mongo.Collection("meteor-imsi-catcher-g-s-m-readings");
GSMReadings.attachSchema(GSMReadingsSchema)

_.extend(Catcher, {
  GSMReadings: GSMReadings
})

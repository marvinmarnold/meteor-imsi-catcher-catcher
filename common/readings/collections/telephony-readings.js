TelephonyReadings = new Mongo.Collection("meteor-imsi-catcher-g-s-m-readings");
TelephonyReadings.attachSchema(TelephonyReadingsSchema)

_.extend(Catcher, {
  TelephonyReadings: TelephonyReadings
})

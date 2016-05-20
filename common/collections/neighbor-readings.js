NeighborReadings = new Mongo.Collection("meteor-imsi-catcher-neighbor-readings");
NeighborReadings.attachSchema(NeighborReadingsSchema)

_.extend(Catcher, {
  NeighborReadings: NeighborReadings
})

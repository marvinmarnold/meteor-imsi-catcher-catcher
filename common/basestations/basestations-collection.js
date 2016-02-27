Basestations = new Mongo.Collection("meteor-imsi-catcher-basestations");
Basestations.attachSchema(BasestationsSchema)

_.extend(Catcher, {
  Basestations: Basestations
})

Detections = new Mongo.Collection("meteor-imsi-catcher-detections");
Detections.attachSchema(DetectionsSchema)

_.extend(Catcher, {
  Detections: Detections,
  inDanger: function() {
    var recent = new Date().getTime() - 5000//60 * 60 * 1000

    return !!Detections.findOne({createdAt: {$gt: new Date(recent)}})
  }
})

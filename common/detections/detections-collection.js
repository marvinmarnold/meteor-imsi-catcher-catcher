Detections = new Mongo.Collection("meteor-imsi-catcher-detections");
Detections.attachSchema(DetectionsSchema)

_.extend(Catcher, {
  Detections: Detections,
  inDanger: function() {
    return threatScore > 100
  },
  threatScore: function() {
    var recent = new Date().getTime() - 5000//60 * 60 * 1000

    var detections = !!Detections.find({createdAt: {$gt: new Date(recent)}}).fetch()
    var threatScore = _.reduce(detections, (sum, detection) => {
      return sum + detection.score;
    }, 0)

    return threatScore
  }
})

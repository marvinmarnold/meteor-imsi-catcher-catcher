var options = {limit: 100, sort: {createdAt: -1}}

Meteor.publish("catcher/nearby-detections", function(latitude, longitude) {
  return Detections.find({
    // latitude within tolerance
    // longitude within tolerance
  }, options)
});

Meteor.publish("catcher/my-detections", function(deviceId) {
  return Detections.find({}, options)
});

Meteor.publish("catcher/recent-detections", function() {
  var oneWeek = 1000 * 60 * 60 * 24 * 7
  var recent = new Date(new Date().getTime() - oneWeek)
  return Detections.find({
    createdAt: {$gt: recent}
  }, options)
});

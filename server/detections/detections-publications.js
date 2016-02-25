
Meteor.publish("catcher/nearby-detections", function(latitude, longitude, ) {

});

Meteor.publish("catcher/my-detections", function(deviceId) {
  return Detections.find()
});

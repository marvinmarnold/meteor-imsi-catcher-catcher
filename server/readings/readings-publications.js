Meteor.publish("catcher/readings", function(deviceId) {
  check(deviceId, String);

  return [
    SIMReadings.find({"commonReading.deviceId": deviceId}),
    GSMReadings.find({"commonReading.deviceId": deviceId})
  ]
});

import { Detections } from '../../common/collections/detections.js';

Meteor.methods({
  'catcher.simulate-detection': (deviceId) => {
    check(deviceId, String);

    return  Detections.insert({
      deviceId: deviceId,
      isTest: true,
      basestationId: "Test basestation",
      detectorName: "Test detector",
      message: "This is not a real detection. This is for testing only",
      score: 100,
      longitude: 32.890237,
      latitude: -26.167970,
      readingIds: ["Test, no readings"]
    });
  }
});

const oneWeek = 1000 * 10;//60 * 60 * 24 * 7
const recent = new Date(new Date().getTime() - oneWeek)
const recentSelector = {createdAt: {$gt: recent}}
const options = {limit: 100, sort: {createdAt: -1}}
// Meteor.publish("catcher/nearby-detections", function(latitude, longitude) {
//   return Detections.find({
//     // latitude within tolerance
//     // longitude within tolerance
//   }, options)
// });

Meteor.publish("catcher.detections.me", function(deviceId) {
  let selector = {deviceId: deviceId};
  selector = _.extend(selector, recentSelector);

  return Detections.find(selector, options)
});

// Meteor.publish("catcher/recent-detections", function() {
//   return Detections.find(recentSelector, options)
// });

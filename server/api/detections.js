import { Detections } from '../../common/collections/detections.js';
import { check } from 'meteor/check';

Meteor.methods({
  'catcher.simulate-detection': (deviceId, options = {}) => {
    check(deviceId, String);
    check(options, {
      detectorName: Match.Optional(String),
      basestationId: Match.Optional(String),
      message: Match.Optional(String),
      score: Match.Optional(Number),
      longitude: Match.Optional(Number),
      latitude: Match.Optional(Number)
    });

    const defaultOptions = {
      basestationId: "Test basestation",
      detectorName: "Test detector",
      message: "This is not a real detection. This is for testing only",
      score: 100,
      longitude: 32.890237,
      latitude: -26.167970
    }

    _.defaults(options, defaultOptions)

    _.extend(options, {
      deviceId: deviceId,
      isTest: true,
      readingIds: ["Test, no readings"]
    });

    return  Detections.insert(options);
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

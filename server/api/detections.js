import { Detections } from '../../common/collections/detections.js';
import { check } from 'meteor/check';

function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function randGPS() {
  return getRandomInRange(-180, 180, 3);
}


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
      longitude: randGPS(),
      latitude: randGPS()
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

function recent() {
  return new Date(new Date().getTime() - oneWeek)
}

function getRecentSelector() {
  return {createdAt: {$gt: recent()}};
}

const options = {limit: 100, sort: {createdAt: -1}}
// Meteor.publish("catcher/nearby-detections", function(latitude, longitude) {
//   return Detections.find({
//     // latitude within tolerance
//     // longitude within tolerance
//   }, options)
// });

Meteor.publish("catcher.detections.me", function(deviceId) {
  let selector = {deviceId: deviceId};
  selector = _.extend(selector, getRecentSelector());

  return Detections.find(selector, options)
});

// Relevant = recent
Meteor.publish("catcher.detections.relevant", function() {
  return Detections.find(getRecentSelector(), options)
});

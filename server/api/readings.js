import { Meteor } from 'meteor/meteor';
import { SIMReadings } from '../../common/collections/sim-readings.js';
import { CommonReadingsSchema } from '../../common/schemas/common-readings-schema.js';
import {
  collectionForReadingType,
  isDuplicateReading
} from '../../common/lib/readings-helpers.js';

Meteor.methods({
  // Return the result of Reading.insert or false if duplicate entry
  'catcher.readings.insert': function(reading) {
    CommonReadingsSchema.namedContext().validate(reading.commonReading);

    // Must register deviceId before can add a reading
    // if(!DeviceId.isClaimed(reading.commonReading.deviceId))
    //   throw new Meteor.Error('invalid-device-id', "DeviceId has not been registered.");


    // Ensure reading is formatted correctly
    var readingCollection =   collectionForReadingType(reading.commonReading.readingType);
    readingCollection.simpleSchema().namedContext().validate(reading);

    if(!isDuplicateReading(reading)) {
      return readingCollection.insert(reading);
    } else {
      return false
    }
  }
});

Meteor.publish("catcher.readings.device", function(deviceId) {
  check(deviceId, String);

  return [
    SIMReadings.find({"commonReading.deviceId": deviceId}),
    // GSMReadings.find({"commonReading.deviceId": deviceId})
  ]
});

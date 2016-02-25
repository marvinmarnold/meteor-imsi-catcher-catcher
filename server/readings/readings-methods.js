Meteor.methods({
  'catcher/readings/insert': function(reading) {
    check(reading, Match.ObjectIncluding({
      commonReading: {
        readingType: String,
        deviceId: String,
        deviceScannerId: Number,
        debug: Match.Optional(String)
      }
    }))

    if(!DeviceId.isClaimed(reading.commonReading.deviceId))
      throw new Meteor.Error('invalid-device-id', "DeviceId has not been registered.");

    var readingCollection = Catcher.collectionForReadingType(reading.commonReading.readingType);
    check(reading, readingCollection.simpleSchema())
    return readingCollection.insert(reading);
  }
});

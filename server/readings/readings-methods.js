Meteor.methods({
  // Return the result of Reading.insert or false if duplicate entry
  'catcher/readings/insert': function(reading) {
    check(reading, Match.ObjectIncluding({
      commonReading: {
        readingType: String,
        deviceId: String,
        deviceScannerId: Number,
        debug: Match.Optional(String)
      }
    }))

    // Must register deviceId before can add a reading
    if(!DeviceId.isClaimed(reading.commonReading.deviceId))
      throw new Meteor.Error('invalid-device-id', "DeviceId has not been registered.");


    // Ensure reading is formatted correctly
    var readingCollection =   Catcher.collectionForReadingType(reading.commonReading.readingType);
    check(reading, readingCollection.simpleSchema())

    // Don't need duplicates if nothing changed
    var existingReading = Catcher.SIMReadings.findOne({
      "commonReading.deviceId": reading.commonReading.deviceId,
      mcc: reading.mcc,
      mnc: reading.mnc
    })

    if(!existingReading) {
      return readingCollection.insert(reading);
    } else {
      return false
    }
  }
});

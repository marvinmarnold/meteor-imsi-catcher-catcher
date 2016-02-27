var deviceId = 'asdfasdfasd'

if(Meteor.isServer) {
  Catcher.SIMReadings.remove({})
  DeviceId.DeviceIds.insert({deviceId: deviceId})
}

if(Meteor.isClient) {
  Tinytest.addAsync('Readings - SIM - insert', function(test, done) {

    simReading = {
      commonReading: {
        deviceId: deviceId,
        readingType: Catcher.READING_TYPES.ANDROID_V1_SIM,
        deviceScannerId: 1,
      },
      mcc: 123,
      mnc: 456,
      carrierName: "test carrier name",
      countryCode: "test country code"
    }

    Meteor.call('catcher/readings/insert', simReading,
      function(error, readingId) {
        console.log(error);
        test.isUndefined(error);
        test.isTrue(typeof readingId === 'string');

        done();
    })

  })

}

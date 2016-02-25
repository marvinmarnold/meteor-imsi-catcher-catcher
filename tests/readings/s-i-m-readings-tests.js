if(Meteor.isClient){
  Tinytest.addAsync('Readings - SIM - insert', function(test, done) {
    var deviceId;

    DeviceId.gen(function(error, _deviceId) {
      deviceId = _deviceId;

      simReading = {
        commonReading: {
          deviceId: deviceId,
          readingType: Catcher.READING_TYPES.SIM,
          deviceScannerId: 1,
        },
        mcc: 123,
        mnc: 456,
        carrierName: "test carrier name",
        countryCode: "test country code"
      }

      console.log('imsi-catcher/readings/insert');
      Meteor.call('imsi-catcher/readings/insert', simReading,
        function(error, readingId) {
          test.isUndefined(error);
          test.isTrue(typeof readingId === 'string');

          done();
      })

    })


  })

}

if(Meteor.isServer) {
  Tinytest.add('Detectors - GSM - F3', function(test) {
    // two readings on same CID:LAC, no detections
    // 1st LAC change, 25
    // 2nd 50

    Catcher.Detections.remove({});
    Catcher.TelephonyReadings.remove({});
    Catcher.Basestations.remove({});

    var reading = {
      commonReading: {
        readingType: Catcher.READING_TYPES.GSM,
        deviceId: "one",
        deviceScannerId: 1
      },
      cid: 1,
      lac: 1
    }

    Catcher.Detectors.F3.pre(reading);
    reading.lac = 2
    Catcher.Detectors.F3.pre(reading);
    Catcher.Detectors.F3.pre(reading);
    test.equal(Catcher.Detections.find().count(), 0)

    Catcher.Basestations.insert({
      cid: 1,
      lac: 1
    })

    reading.lac = 2;
    Catcher.Detectors.F3.pre(reading);
    var detection = Catcher.Detections.findOne();
    test.isNotUndefined(detection);

    if(detection) {
      test.equal(detection.detectorName, "F3")
      test.equal(detection.score, 25)
      test.equal(detection.message, "On CID 1, LAC changed from: 1 => 2")
      test.isNotUndefined(detection.createdAt);
    }
  })
}

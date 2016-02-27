// One Cell (CID) with changing LAC
// 1st = 25
// 2nd = 50
var name = 'F3'
var score = 25
var description = "Same CID with changing LAC"

_.extend(Catcher.Detectors, {
  F3: {
    name: name,
    description: description,

    pre(reading) {
      if(reading.cid && reading.lac) {
        var bts = Basestations.findOne({cid: reading.cid})

        if(bts && (bts.lac !== reading.lac)) {
          var message = "On CID " + bts.cid +
            ", LAC changed from: " + bts.lac + " => " + reading.lac

          Detections.insert({
            deviceId: reading.commonReading.deviceId,
            basestationId: bts._id,
            detectorName: name,
            message: message,
            score: score,
            longitude: reading.longitude,
            latitude: reading.latitude,
            readingIds: [reading._id, bts.lastTelephonyReadingId]
          })
        }
      }

    },
    post(reading) {

    },
    reset() {

    }
  }
})

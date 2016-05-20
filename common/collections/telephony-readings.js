TelephonyReadings = new Mongo.Collection("meteor-imsi-catcher-g-s-m-readings");
TelephonyReadings.attachSchema(TelephonyReadingsSchema)

_.extend(Catcher, {
  TelephonyReadings: TelephonyReadings
})

// TelephonyReadings.after.insert(function (userId, reading) {
//   // Run detections before any side effects of inserted reading
//   Catcher.runDetectionPre(reading)
//
//   if(Catcher.isMasterServer())
//     afterInsertReadingServer(reading);
//
//   // Run detections after all side effect of inserted reading
//   Catcher.runDetectionPost(doc)
// });

var afterInsertReadingServer = function(reading) {
  console.log('afterInsertReadingServer');
  console.log(reading);

  if(looksLikeBTS(reading)) {
    console.log('looksLikeBTS');
    var bts = Basestations.findOne({cid: reading.cid})

    if(bts) {
      console.log('update');
      Basestations.update(bts._id, {$set: {
        lac: reading.lac,
        lastTelephonyReadingId: reading._id
      }})
    } else {
      console.log('insert');
      Basestations.insert({
        cid: reading.cid,
        lac: reading.lac,
        mnc: reading.mnc,
        mcc: reading.mcc,
        lastTelephonyReadingId: reading._id,
        hasNeighbors: reading.hasNeighbors
      })
    }
  }
}

var looksLikeBTS = function(reading) {
  return !!reading.cid
}

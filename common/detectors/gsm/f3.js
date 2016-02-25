// One Cell (CID) with changing LAC
// 1st = 25
// 2nd = 50

_.extend(Catcher.Detectors, {
  F3: {
    name: "f3",
    description: "Same CID with changing LAC",
    pre(reading) {
      var cidlac = _dF3CIDLAC.findOne({lac: reading.lac, cid: reading.cid});
      
    },
    post(reading) {

    },
    reset() {

    }
  }
})

var _dF3CIDLAC = new Mongo.Collection("meteor-imsi-catcher-detectors-f3-cidlac");

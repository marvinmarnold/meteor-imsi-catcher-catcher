_.extend(Catcher, {
  _detectors: [],
  addDetector(detector) {
    this._dectectors.push(detector);
  },
  setDetectors(detectors) {
    this._detectors = detectors
  },
  runDetectionPre(reading) {
    _.each(this._detectors, detector => {
      if(reading._id) {
        detector.pre(reading)
      }
    })
  },
  runDetectionPost(reading) {
    _.each(this._detectors, detector => {
      if(reading._id) {
        detector.post(reading)
      }
    })
  }
})

_.extend(Catcher, {
  collectionForReadingType: function(readingType) {
    if(readingType === ANDROID_V1_SIM) {
      return SIMReadings;
    } else {
      return TelephonyReadings;
    }
    // switch(readingType) {
    //   case ANDROID_V1_SIM: return SIMReadings;
    //   case ANDROID_V1_GSM:
    //   case ANDROID_V17_GSM:
    //   case ANDROID_V17_CDMA:
    //   case ANDROID_V17_LTE:
    //   case ANDROID_V17_WCDMA: return GSMReadings;
    // }
  }
})

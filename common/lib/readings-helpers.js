export const READING_TYPES = {
  ANDROID_V1_SIM: 'android-v1-sim',
  ANDROID_V1_GSM: 'android-v1-gsm',
  ANDROID_V1_NEIGHBOR: 'android-v1-neighbor',
  ANDROID_V17_GSM: 'android-v17-gsm',
  ANDROID_V17_CDMA: 'android-v17-cdma',
  ANDROID_V17_LTE: 'android-v17-lte',
  ANDROID_V17_WCDMA: 'android-v17-wcdma'
};

export const READING_TYPES_ARR = _.values(READING_TYPES);

export function collectionForReadingType(readingType) {
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

export function isDuplicateReading(reading) {
  var readingType = reading.commonReading.readingType

  if(readingType === Catcher.READING_TYPES.ANDROID_V1_SIM) {
    return !!Catcher.SIMReadings.findOne({
      "commonReading.deviceId": reading.commonReading.deviceId,
      mcc: reading.mcc,
      mnc: reading.mnc
    })
  } else if(isTelephonyReading(reading)) {
    return !!Catcher.TelephonyReadings.findOne({
      "commonReading.deviceId": reading.commonReading.deviceId,
      cid: reading.cid,
    })
  }

  return false;
}

export function isTelephonyReading(reading) {
  var readingType = reading.commonReading.readingType

  if((readingType === Catcher.READING_TYPES.ANDROID_V1_GSM) ||
    (readingType === Catcher.READING_TYPES.ANDROID_V17_GSM) ||
    (readingType === Catcher.READING_TYPES.ANDROID_V17_CDMA) ||
    (readingType === Catcher.READING_TYPES.ANDROID_V17_LTE) ||
    (readingType === Catcher.READING_TYPES.ANDROID_V17_WCDMA)) {

    return true;
  }

  return false;
}

import { Catcher } from '../../catcher.js';
import { READING_TYPES } from './reading-types.js';

export function collectionForReadingType(readingType) {
  if(readingType === READING_TYPES.ANDROID_V1_SIM) {
    return Catcher.SIMReadings;
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

  if((readingType === READING_TYPES.ANDROID_V1_GSM) ||
    (readingType === READING_TYPES.ANDROID_V17_GSM) ||
    (readingType === READING_TYPES.ANDROID_V17_CDMA) ||
    (readingType === READING_TYPES.ANDROID_V17_LTE) ||
    (readingType === READING_TYPES.ANDROID_V17_WCDMA)) {

    return true;
  }

  return false;
}

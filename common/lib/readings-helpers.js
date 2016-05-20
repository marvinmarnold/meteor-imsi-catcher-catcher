import { Catcher } from '../../catcher.js';
import { READING_TYPES } from './reading-types.js';

export function collectionForReadingType(readingType) {
  if(readingType === READING_TYPES.ANDROID_V1_SIM) {
    return Catcher.SIMReadings;
  } else if(readingType === READING_TYPES.ANDROID_V1_NEIGHBOR) {
    return Catcher.NeighborReadings;
  }  else {
    return Catcher.TelephonyReadings;
  }
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

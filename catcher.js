import { SIMReadings } from './common/collections/sim-readings.js';
import { NeighborReadings } from './common/collections/neighbor-readings.js';
import { TelephonyReadings } from './common/collections/telephony-readings.js';

import { READING_TYPES, READING_TYPES_ARR } from './common/lib/reading-types.js';

export const Catcher = {
  READING_TYPES: READING_TYPES,
  READING_TYPES_ARR: READING_TYPES_ARR,

  // Collections
  SIMReadings: SIMReadings,
  NeighborReadings: NeighborReadings,
  TelephonyReadings: TelephonyReadings,

  // Some "servers" may collect readings and store to DB
  // to avoid duplicate detections, basestations, etc,
  // only one server should process readings and generate detections.
  isMasterServer() {
    return Meteor.settings.IS_MASTER_SERVER === true
  }
};

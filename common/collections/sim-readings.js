import { SIMReadingsSchema } from '../schemas/sim-readings-schema.js';

export const SIMReadings = new Mongo.Collection("meteor-imsi-catcher-s-i-m-readings");
SIMReadings.attachSchema(SIMReadingsSchema)

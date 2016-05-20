import { NeighborReadingsSchema } from '../schemas/neighbor-readings-schema.js';

export const NeighborReadings = new Mongo.Collection("meteor-imsi-catcher-neighbor-readings");
NeighborReadings.attachSchema(NeighborReadingsSchema)

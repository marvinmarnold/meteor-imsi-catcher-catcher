import { DetectionsSchema } from '../schemas/detections-schema.js';

export const Detections = new Mongo.Collection("meteor-imsi-catcher-detections");
Detections.attachSchema(DetectionsSchema)

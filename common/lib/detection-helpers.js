import { Detections } from '../collections/detections.js';

// Returns sum of threat score of all recent Detections
export function getThreatScore() {
  const recent = new Date().getTime() - 5000//60 * 60 * 1000

  var detections = !!Detections.find({createdAt: {$gt: new Date(recent)}}).fetch()

  var threatScore = _.reduce(detections, (sum, detection) => {
    return sum + detection.score;
  }, 0)

  return threatScore;
}

export function inDanger() {
  return getThreatScore() >= 100;
}

// Constraints come from the approved handoff (REQ-PROV-BATCH, REQ-PRIV-GATE,
// REQ-PRIV-BODY, REQ-PRIV-NOCLINICAL).
const MAX_BATCH_SIZE = 20;
const NEUTRAL_BODY = 'An update is available in your secure portal.';

export function buildNotification(result) {
  if (result && result.reviewed === true && result.released === true) {
    return { eligible: true, body: NEUTRAL_BODY };
  }
  return { eligible: false, body: '' };
}

export function scheduleBatches(items) {
  const batches = [];
  for (let i = 0; i < items.length; i += MAX_BATCH_SIZE) {
    batches.push(items.slice(i, i + MAX_BATCH_SIZE));
  }
  return batches;
}

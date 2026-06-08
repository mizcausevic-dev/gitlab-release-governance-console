import assert from 'node:assert/strict';
import { test } from 'node:test';
import fixture from '../fixtures/sample.json' with { type: 'json' };
import { summarizeSignal } from '../src/index.mjs';

test('GitLab signal fixture summarizes deterministically', () => {
  const summary = summarizeSignal(fixture);
  assert.equal(summary.vendor, 'GitLab');
  assert.equal(summary.domain, 'DevOps / Platform Engineering');
  assert.equal(summary.averageRisk, 68);
  assert.equal(summary.averageEvidence, 7);
  assert.equal(summary.priorityLane, 'Spend and exposure posture');
});

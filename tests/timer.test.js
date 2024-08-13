'use strict';

import CyberFlake from '../src/utils/timer.js';

/**
 * Tests the number of CyberFlake IDs generated in 1 second.
 */
function testIdGenerationRate() {
  console.time('all');
  const duration = 1000; // Test süresi (milisaniye)
  const startTime = Date.now();
  let count = [];
  console.time('generation');
  // Test süresi boyunca ID üretimi
  while (Date.now() - startTime < duration) {
    count.push(CyberFlake.generate());
  }
  console.timeEnd('generation');
  console.time('count');
  let uniqueIds = new Set(count);
  console.timeEnd('count');
  console.timeEnd('all');

  function numberWithDots(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  console.log(
    `Total CyberFlake IDs generated in ${duration / 1000} second(s): ${numberWithDots(uniqueIds.size)} and ${count.length - uniqueIds.size} repeated!`,
  );
}

testIdGenerationRate();

const id = CyberFlake.generate();
console.log(id);
const deconstructedId = CyberFlake.deconstruct(id);
console.log(deconstructedId);
console.log(deconstructedId.date.toLocaleString());

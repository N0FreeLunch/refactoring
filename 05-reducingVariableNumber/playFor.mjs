import fs from 'fs';
let plays = JSON.parse(fs.readFileSync('../01-start/play.json', 'utf-8'));

function playFor(aPerformance) {
  return plays[aPerformance.playID];
}


export default playFor;

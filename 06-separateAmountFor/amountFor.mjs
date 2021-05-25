import playFor from './playFor.mjs';

function amountFor(aPerformance) {
  let result = 0;

  switch(playFor(aPerformance).type) {
    case "tragedy":
    result = 40000;
    if(aPerformance.audience > 30) {
      result += 1000 * (aPerformance.audience - 30);
    }
    break;

    case "commedy":
    result = 30000;
    if(aPerformance.audience > 20) {
      result += 300 * aPerformance.audience;
    }
    break;

    default :
    throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`)
  }

  return result;
}


export default amountFor;

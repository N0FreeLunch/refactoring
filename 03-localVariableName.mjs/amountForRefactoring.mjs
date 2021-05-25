function amountFor(perf, play) {
  let result = 0;

  switch(play.type) {
    case "tragedy":
    result = 40000;
    if(perf.audience > 30) {
      result += 1000 * (perf.audience - 30);
    }
    break;

    case "commedy":
    result = 30000;
    if(perf.audience > 20) {
      result += 300 * perf.audience;
    }
    break;

    default :
    throw new Error(`알 수 없는 장르 : ${play.type}`)
  }

  return result;
}


export default amountFor;

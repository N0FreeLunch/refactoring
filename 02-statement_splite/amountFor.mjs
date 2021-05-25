function amountFor(perf, play) {
  let thisAmount = 0;

  switch(play.type) {
    case "tragedy":
    thisAmount = 40000;
    if(perf.audience > 30) {
      thisAmount += 1000 * (perf.audience - 30);
    }
    break;

    case "commedy":
    thisAmount = 30000;
    if(perf.audience > 20) {
      thisAmount += 300 * perf.audience;
    }
    break;

    default :
    throw new Error(`알 수 없는 장르 : ${play.type}`)
  }

  return thisAmount;
}


export default amountFor;

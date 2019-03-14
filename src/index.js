module.exports = function getZerosCount(number, base) {
  
  var simple=[];

  var p=2;
  while(base >= p*p) {
    if(base % p == 0) {
      simple.push(p);
      base=base/p;
    } 
    else {
      p++;
    }
  }
  simple.push(base);

  var sums=[];

  for( var i=0; i<simple.length; i++) {
    var sum=0;
    var power=1;
    var simpleNumber=simple[i];
    while(number/simpleNumber >= 1) {
      sum += Math.floor(number/simpleNumber);
      power++;
      simpleNumber= Math.pow(simple[i],power);
    }
    sums.push(sum);
  }

  var results=[];

  for(var i=0; i<sums.length; i++) {
    var countSame=0;
    for(var j=i+1; j<sums.length; j++) {
      if(sums[i]==sums[j]) countSame++;
    }
    results.push(Math.floor(sums[i]/(countSame+1)));
    i=i+countSame;
  }

  for(var i=1; i<results.length; i++) {
    var min=results[0];
    if(results[i] < min) min=results[i];
  }

  return min;
}
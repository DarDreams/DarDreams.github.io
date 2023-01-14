function findMaxNumber(a,b,c,d) {

  let numb = [a,b,c,d];
  console.log('Number.isInteger(numb[i]);', Number.isInteger(numb[3]));
  
  for (let i = 0; i < 3; i++) {
    if (typeof(numb[i]) != "number" || typeof(numb[i]) == NaN || Number.isInteger(numb[i]) == false) {
    return(0);
    } else {
         console.log('Math.max(a,b,c,d)', Math.max(a,b,c,d));
         return(Math.max(a,b,c,d));
    }
}
}

findMaxNumber(1,5,3,"5");
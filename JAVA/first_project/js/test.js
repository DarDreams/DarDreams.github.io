function findMaxNumber(a,b,c,d) {

  let numb = [a,b,c,d];
  console.log('Number.isInteger(numb[i]) - ', Number.isInteger(numb[1]));
  
  for (let i = 0; i < 3; i++) {
    if (typeof(numb[i]) != "number" || Number.isInteger(numb[i]) == true || typeof(numb[i]) == "NaN") {
        console.log('0', 0);
        
    
    } else {
         console.log('Math.max(a,b,c,d)', Math.max(a,b,c,d));
         return(Math.max(a,b,c,d));
    }
}
}

findMaxNumber(1,"5",3,6);
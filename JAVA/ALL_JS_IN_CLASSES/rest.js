const log = function (a, b, ...rest) {
    console.log(a,b,...rest);
}

log('basic', 'rest', 'operator', 'usage');


function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3);


function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', 'top');
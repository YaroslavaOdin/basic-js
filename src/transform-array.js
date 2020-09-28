const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr)) throw new Error('Err');
  if(arr.length === 0) return arr;
  let res = [];
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
      case '--discard-prev' : 
        if(i === 0) break;
        res.pop();
        break;
      case '--double-prev' :
        if(i === 0) break;
        res.push(arr[i - 1]);
        break;
      case '--discard-next' :
        if(i === arr.length - 1) break;
        if(arr[i + 2] == '--double-prev' || arr[i + 2] == '--discard-prev') i++;
        i++;
        break;
      case '--double-next' :
        if(i === arr.length - 1) break;
        res.push(arr[i + 1]);
        break;
      default : res.push(arr[i]);
    }
  }
  return res;
};

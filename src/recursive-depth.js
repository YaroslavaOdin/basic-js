const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      let level = 1;
      if(!Array.isArray(arr)) return 0;
      else {
          for (let i = 0; i < arr.length; i++){
              level = Math.max(this.calculateDepth(arr[i]) + 1, level)
          }
          return level;
      }
  }
};
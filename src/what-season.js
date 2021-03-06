const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (!date.getMonth || Object.keys(date).length > 0)  throw new Error();
  const seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  };
  for (let season in seasons) {
    if (seasons[season].includes(date.getMonth())) {
      return season;
    };
  };
};

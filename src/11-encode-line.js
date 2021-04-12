/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // console.log(str);
  // const obj = str.split('').reduce((acc, el) => {
  //   acc[el] = (acc[el] || 0) + 1;
  //   return acc;
  // }, {});
  // console.log(obj);
  // const keys = Object.keys(obj);
  // const values = Object.values(obj);
  // console.log(keys);
  // console.log(values);
  // let finishString = '';
  // for (let i = 0; i < keys.length; i++) {
  //   finishString += values[i] + keys[i];
  // }
  // console.log(finishString);
  // return finishString;
  const splitStr = str.split('');
  let sum = 0;
  let finishStr = '';
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === splitStr[i + 1]) {
      sum++;
    } else {
      sum++;
      finishStr += sum + splitStr[i];
      sum = 0;
    }
  }
  return finishStr.replace(/1/g, '');
}

module.exports = encodeLine;

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  throw new Error('Not implemented');

  // const arr = [];
  // for (let i = 0; i < domains.length; i++) {
  //   const z = domains[i].replace(/.*[.]/, '.');
  //   const x = `${z}.${domains[i].replace(z, '')}`;
  //   const y = `${z}.${domains[i].replace(x, '')}`;
  //   console.log(domains[i], 'dom');
  //   console.log(z, 'z');
  //   console.log(x, 'x');
  //   console.log(y, 'y');
  //   arr.push(z);
  //   arr.push(y);
  //   arr.push(x);
  // }
  // const obj = arr.reduce((acc, el) => {
  //   acc[el] = (acc[el] || 0) + 1;
  //   return acc;
  // }, {});
  // console.log(obj);
  // console.log('----------------------');
  // return obj;
  // const arr = [];
  // let str = '';
  // let x;
  // let sum = 0;
  // for (let i = 0; i < domains.length; i++) {
  //   const splitArr = domains[i].split('');
  //   for (let j = 0; j < splitArr.length; j++) {
  //     if (splitArr[j] === '.') {
  //       sum++;
  //       if (sum > 1) {
  //         const z = domains[i].replace(/.*[.]/, '.');
  //         console.log(z, 'z');
  //         x = `${domains[i].replace(z, '')}`;
  //         console.log(x, 'x');
  //         str += z;
  //         console.log(str, 'str');
  //         arr.push(str);
  //         console.log(arr, 'arr');
  //       } else {
  //         const z = domains[i].replace(/.*[.]/, '.');
  //         x = `${z}.${domains[i].replace(z, '')}`;
  //         arr.push(z);
  //         arr.push(x);
  //       }
  //     }
  //   }
  // }
  // const obj = arr.reduce((acc, el) => {
  //   acc[el] = (acc[el] || 0) + 1;
  //   return acc;
  // }, {});
  // console.log(obj, 'obj');
  // console.log('-------------------------------------------');
  // getDNSStats(x);
  // return obj;
}

module.exports = getDNSStats;

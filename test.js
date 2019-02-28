// const test = ['a', 'b','c', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c']
// const test2 = ['a', 'a', 'a']

// const yellow = (arr) => {
//   for (let e of arr) {
//     if (e === 'b' || e === 'c') {
//       return e
//     }
//   }
// }

// const setColor = (arr, callback) => {
//   callback(arr, (valid) => {
//     if (valid) {
//       return 'yellow'
//     } else {
//       return 'white'
//     }
//   })
// }

// console.log(setColor(test2, yellow))

const myfunc = () => {
  if (4) {
    return this
  }
}

console.log(myfunc)


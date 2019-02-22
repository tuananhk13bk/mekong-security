const obj = ['aaa', 'bbb', 'cc', 'dddddd']

const result = (obj) => {
  for (let value of obj) {
    if (value === 'cc') {
      return value
    }
  }
}

let x = result(obj)
console.log(x)
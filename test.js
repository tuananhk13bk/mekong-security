const mergeTwoObject = (result, input) => {
  return Object.assign({}, result, input)
}

const obj1 = {
  a: '1',
  b: '2',
  c: '3'
}

const obj2 = {
  a: '100',
  b: '200',
  c: '300'
}

const result = mergeTwoObject(obj1, obj2)

console.log(result)
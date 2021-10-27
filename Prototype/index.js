/**
 * Prototype
 */

// prototype __proto__

//deepClone

function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) return obj
  let copy = obj instanceof Array ? [] : {}

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepClone(obj[key])
    }
  }
  return copy
}


const obj = {a: 1, b: 2}

const deepObj = deepClone(obj)

console.log(obj === deepObj,"deepClone");

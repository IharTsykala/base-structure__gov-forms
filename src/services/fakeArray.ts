const newArray = Array.from(new Array(4))

let fakeArraySteps = newArray.map((step, index) => {
  return {
    id: `step${index + 1}`,
    name: `step${index + 1}`,
    arrayBlocks: Array.from(new Array(index + 1)).map((block, ind) => {
      return {
        id: `block${index + 1 + (ind + 1) ** 2}`,
        name: `block${index + 1 + (ind + 1) ** 2}`,
      }
    }),
  }
})

export default fakeArraySteps

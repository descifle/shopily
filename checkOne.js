const array = ['funy', 'singing', 'something cool']

const secondArray = [...array, 'kiddy']

console.log(secondArray)

const restOperatorFunction = (...items) => {
    return items.reduce((a, b) => a + b, 0)
}

console.log(restOperatorFunction(1,1,2,4,5,6,8))
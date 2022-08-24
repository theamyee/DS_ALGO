let rl = require('readline')

let rlInterface = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})

let ans = rlInterface.question("Input number of times you want to run single loop: ", count=>{
    console.log(count)
    let ct1 = new Date()
    let startTime = ct1.getTime()
    console.log( "Start time: " + startTime)
    while (count > 0) {
        count--
    }
    let ct2 = new Date()
    let endTime = ct2.getTime()
    console.log( "End time: " + endTime)
    console.log("Time taken: ", endTime - startTime)

    rlInterface.close()
})
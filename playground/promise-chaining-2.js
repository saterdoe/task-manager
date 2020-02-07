require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e156f2f087be1102cb198ac').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5e2cffb222b03f308cf40034').then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
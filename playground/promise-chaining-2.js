require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e156f2f087be1102cb198ac').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false})
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})
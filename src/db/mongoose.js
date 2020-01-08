const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isLength(value, {min: 6})) {
                throw new Error('Length must be greater than 6 caracters')
            }
            if (value.includes('password')) {
                throw new Error('The password must not be include the word password')
            } 
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number') 
            }
        }
    }
})

const Tasks = mongoose.model('Tasks', {
    desciption: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const task = new Tasks({
    desciption: '         Buy a cinema ticket     ',
    //completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})

// const me = new User({
//     name: '    Andrew    ',
//     email: 'MYEMAIL@MEAD.IO  ',
//     password: '678password1234'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })
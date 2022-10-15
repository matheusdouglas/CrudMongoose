
const dotenv = require("dotenv")

const connectToDatabase = require('./src/connect')

dotenv.config();

connectToDatabase();



require('./modules/express')




// const {Person} = require("./person")
// const person = new Person('Matheus')
// require("./modules/path")
// require("./modules/fs")
// require("./modules/http")


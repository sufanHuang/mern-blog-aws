const app = require('./src/app.js')
//const mongoose = require('mongoose')

const port = process.env.PORT || 8000

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:32768",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))


app.listen(port,()=>{
    console.log(`listening on: http//localhost:${port}`)
})

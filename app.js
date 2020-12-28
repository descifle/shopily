const express = require('express')
const bodyParser = require('body-parser')
const port = 8000 || Node.env.PORT
const path = require('path')

const app = express()

app.use(bodyParser.urlencoded({extended:true}))

adminRoute = require('./routes/admin.js')
shopRoute = require('./routes/shop.js')
app.use('/admin',adminRoute)
app.use(shopRoute)
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})




app.listen(port)
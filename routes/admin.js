const path = require('path')
const router = require('express').Router()

router.get('/addproduct', (req,res,next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'addproduct.html'))
})

router.post('/addproduct', (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

router.post('/product', (req,res,next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

let items = ['Eat more', 'Go shopping']

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{

    let date = new Date()
    const options = {weekday: 'long', day: 'numeric', month: 'long'}

    let day = date.toLocaleDateString('en-US', options)

    res.render('list', {kindOfDay: day, newListItems: items})

})

app.post('/', (req,res) => {

    items.push(req.body.newItem)

    res.redirect('/')

    
})


app.listen(3000, () =>{
    console.log('Server is running on port 3000')
})
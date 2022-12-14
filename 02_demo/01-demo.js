const express = require('express');
const expressHandlebars = require('express-handlebars').engine;
const app = express()

// configure Handlebars view engine

app.engine('handlebars', expressHandlebars({
 defaultLayout: 'main',
//  extname: '.handlebars'
}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

const port = process.env.PORT || 3000
// app.get('/', (req, res) => res.render('home'))
const fortunes = [
    "XE DAP",
    "XE MAY",
    "O TO",
    "MAY TINH",
    "BAN PHIM",
    "CHUC BAN MAY MAY LAN SAU",

  
]
app.get('/',(req,res)=>{
    const randomFortune = fortunes[Math.floor(Math.random()*fortunes.length)]
    res.render('home',{fortune: randomFortune})
})
app.use((req, res) => {
    res.status(404)
    res.render('404')
})
   // custom 500 page
   app.use((err, req, res, next) => {
    console.error(err.message)
    res.status(500)
    res.render('500')
})
   app.listen(port,() => console.log(
    `Express started on http://localhost:${port}:`+
    `press Ctrl-C to terminate`
))
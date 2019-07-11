const express = require("express")
const path    = require("path")
const serveStatic= require("serve-static")

app = express()
app.use(serveStatic(__dirname + "/dist"))

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use((req, res, next) => {
    res.status(404);

    if (req.accepts('html')) {
        res.render('404', {url: req.url});
        return;
    }

    if (req.accepts('json')) {
        res.send({error: 'Not found'});
        return;
    }

    res.type('txt').send('Not found1');
})

const PORT = process.env.PORT || 8081
app.listen(PORT)

console.log('server started on ' + PORT)
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 4000

express()
  .all('*', function(req, res, next) {
    var origin = req.get('origin'); 
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  })
  .use(express.static(path.join(__dirname)))
  .set('views', path.join(__dirname))
  .set('view engine', 'html')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))



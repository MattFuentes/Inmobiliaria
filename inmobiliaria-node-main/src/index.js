const express = require('express');
const morgan = require("morgan");
const app = express();
const path = require('path');

// Config
app.set('port', process.env.PORT || 3000); // TODO cambiar puerto si es necesario
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlewares

// routes
app.use(require('./routes'));

// HTML Files
app.use(express.static(path.join(__dirname, 'public')))

// Listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'))
}); 

let express = require('express');
let todoController = require('./controllers/todo-controller');
let app = express();

// stup ejs as template engine

app.set('view engine', 'ejs');

//static files
app.use(express.static('./public'));

//fire the controllers

todoController(app);

//listening to port

app.listen(3000);
console.log('port 3000');

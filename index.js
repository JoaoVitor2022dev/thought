const express = require('express'); 
const exphbs = require('express-handlebars'); 
const session = require('express-session'); 
const FileStora = require('session-file-store')(session)
const flash = require('express-flash'); 

// execuçao do express
const app = express();

// conecçao com banco de dados mysql 
const conn = require('./db/conn');




// config de servidor
conn
.sync()
.catch(() => {
    app.listen(5000)
})
.catch((error) => console.log(error))







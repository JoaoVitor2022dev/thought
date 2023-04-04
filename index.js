const express = require('express'); 
const exphbs = require('express-handlebars'); 
const session = require('express-session'); 
const FileStore = require('session-file-store')(session)
const flash = require('express-flash'); 

// execuçao do express
const app = express();

// conecçao com banco de dados mysql 
const conn = require('./db/conn');


// template engine
app.engine('handlebars',  exphbs.engine()); 
app.set('view engine', 'handlebars');


//  receber respota do body 
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json());


// session middleware
app.use(
    session({
        name: 'session',
        secret: 'nosso_secret', 
        resave: false,
        saveUninitialized: false,
        store: new FileStore( {
            logFn: function() {}, 
            path: require('path').join(require('os').tmpdir(), 'sessions')
        }), 
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now + 360000),
            httpOnly: true
        } 
    }),
) 

// flash messages 
app.use(flash())


// public path
app.use(express.static('public'));


// set session to res
app.use((req , res , next ) => {
   if (res.session.userId) {
    res.locals.session = req.session
   }

   next()

})


// config de servidor
conn
.sync()
.catch(() => {
    app.listen(5000)
})
.catch((error) => console.log(error))







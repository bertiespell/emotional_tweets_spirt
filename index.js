const app = require('./server/server');
const config = require('./config');
const PORT = config.PORT[process.env.NODE_ENV];;

app.listen(PORT, (err) => {
    if (err) return console.log('ERROR: ', err);
    console.log(`App listening on port ${PORT}`)
});


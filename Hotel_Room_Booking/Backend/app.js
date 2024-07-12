const express = require ('express')
const  { mongoose } = require ('mongoose')
const app = express();
const cors = require ('cors')
const routes = require('./route/routes')
const authRoute = require('./route/auth')
const cookieParser = require('cookie-parser')

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: 'http://localhost:3000',
    })
);

app.use('/', routes);
app.use('/', authRoute);

const PORT = 5000;
app.listen(PORT, ()=> {
    console.log(`Server running in port ${PORT}`);
});

mongoose.connect("mongodb://localhost:27017/Hotel-Booking");

const database = mongoose.connection;

database.on("error", (error) =>{
    console.log(error);
});

database.once("connected", ()=> {
    console.log('Dtabase Connected');
});
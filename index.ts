import Server from './classes/server';
import userRoutes from './routes/usuario';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';



const server = new Server();

//Body Parses
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

//Rutas de mi app
server.app.use('/user', userRoutes );


// Conectar DB
mongoose.connect('mongodb://localhost:27017/mudat', 
                { useNewUrlParser: true, useCreateIndex: true }, ( err ) => {

    if (err) throw err;

    console.log('Base de datos en Linea');
})


// Levantar express server
server.start( () => {
    console.log('Servidor Corriendo en puerto ${ server.port }');
});

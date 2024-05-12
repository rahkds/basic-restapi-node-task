import express from 'express';
import cors from 'cors';
import http from 'http';
import routes from './routes/usersRoute.js';
import config from './config/config.js';
import {ERROR_MSG} from "./constants/constants.js";
import './connections/db.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for body data parsing
app.use(cors());// enable cors
app.options('*', cors());
app.use('/api', routes);

//url not found middleware
app.use((req,res) => {
    return res.status(404).json({message: ERROR_MSG.API_NOT_FOUND});
})

const server = http.createServer(app);

server.listen(config.port, () => {
    console.log(`Listening to port ${config.port}`);
});

server.on('error', (err) => {
    console.error(`Some error at server `, err);
});



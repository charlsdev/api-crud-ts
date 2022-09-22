import express from 'express';
import cors from 'cors';
import respTime from 'response-time';

const app = express();

import indexRoutes from './routes/index.routes';
import pacientRoutesMongoDB from './routes/mongo.routes';
import pacientRoutesMySQL from './routes/mysql.routes';

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(respTime());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/mongo', pacientRoutesMongoDB);
app.use('/mysql', pacientRoutesMySQL);

export default app;
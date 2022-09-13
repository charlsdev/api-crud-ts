import express from 'express';
import cors from 'cors';

const app = express();

import indexRoutes from './routes/index.routes';
import pacientRoutesMongoDB from './routes/mongo/pacients.routes';
import pacientRoutesMySQL from './routes/mysql/pacients.routes';

app.set('port', process.env.PORT || 3000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRoutes);
app.use('/mongo', pacientRoutesMongoDB);
app.use('/mysql', pacientRoutesMySQL);

export default app;
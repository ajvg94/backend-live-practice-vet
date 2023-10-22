import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import databaseConnection from './models/connection';
import { router as DogRoutes } from './routes/dog';
import { router as OwnerRoutes } from './routes/owner';

const app = express();
app.use(express.json());

app.use(OwnerRoutes);
app.use(DogRoutes);

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    databaseConnection.sync({force: true});
    //databaseConnection.sync();

    console.log(`App listening on port: ${PORT}`);
});
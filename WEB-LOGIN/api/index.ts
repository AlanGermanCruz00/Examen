import express, { Application } from 'express';
import bodyParser from 'body-parser';
import testRoutes from './routes/test.route';
import testUsuario from './routes/usuario.route';
import userRoute from './routes/users.route';
import morgan from 'morgan';
import cors from 'cors';   
import dataBaseService from './services/data-base.service';
import animalsRoutes from './routes/animals.route';

class Api {
    public app: Application;
    
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        // 📌 Logger HTTP
        this.app.use(morgan('dev'));

        this.app.set('port', 3000);

        // 📌 Habilitar CORS para Angular en localhost:4200
        this.app.use(cors({
            origin: "http://localhost:4200", // origen de tu frontend
            credentials: true
        }));

        this.app.use(bodyParser.json());
    }

    routes(): void {
        this.app.use("/test", testRoutes);
        this.app.use("/acceso", testUsuario);
        this.app.use("/api/users", userRoute);
        this.app.use("/api/animals" , animalsRoutes);

    }

    start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('✅ Server on port', this.app.get('port'));
        });

        dataBaseService.createConnections();
    }
}

const api = new Api();
api.start();

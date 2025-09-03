import { Router } from "express";
import userController from "../controllers/user.controller";
import Controlleranimal from "../controllers/animals.controlles"; 

class AnimalsRoutes {
    public router: Router = Router();

    constructor() {this.config();}
    config(): void {
    
        this.router.get('/getAll', [], Controlleranimal.showAnimals);
        this.router.post('/create', [], Controlleranimal.AddAnimals);
        this.router.delete('/delete/:id', [], Controlleranimal.deleteAnimals);
        this.router.put('/update/:id', [], Controlleranimal.updateAnimals);


    }
}

const animalsRoutes = new AnimalsRoutes();
export default animalsRoutes.router;
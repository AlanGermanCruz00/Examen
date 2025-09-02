import { Router } from "express";
import userController from "../controllers/user.controller";
class UserRoutes {
    public router: Router = Router();

    constructor() {this.config();}
    config(): void {

        // this.router.post('/create', [], userController.create);
        // this.router.get('/show', [], userController.show1);
        // this.router.delete('/:id', [], userController.delete);
        //ANIMALS 
        this.router.post('/login', [], userController.singIn);
    }
}
const userRoutes = new UserRoutes();
export default userRoutes.router;
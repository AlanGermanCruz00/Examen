import { Router } from "express";
import controllerTest from "../controllers/test.controlles";
class TestRoutes {
    public router: Router = Router();
    constructor() {
        this.config();
    }
    config(): void {
        this.router.get('/', [], controllerTest.llamarDocumento)
    }
}

const testRoutes = new TestRoutes();
export default testRoutes.router;
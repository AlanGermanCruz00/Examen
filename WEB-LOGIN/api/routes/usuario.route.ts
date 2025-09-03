import { Router } from "express";
import controllerTestUsuario from "../controllers/usuario.controlles";
class TestRoutesUsuario {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        this.router.post('/post', [], controllerTestUsuario.llamarDocumentoUsuario);
        this.router.get('/get/:nombre', [], controllerTestUsuario.llamarDocumentoUsuario2);
        this.router.put('/put/:id', [], controllerTestUsuario.llamarDocumentoUsuario3);
        this.router.delete('/delete/:id', [], controllerTestUsuario.llamarDocumentoUsuario4);
    }
}

const testRoutesusuario = new TestRoutesUsuario();
export default testRoutesusuario.router;
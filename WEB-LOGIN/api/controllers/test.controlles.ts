import { Request, Response } from "express";
class ControllerTest {
    public llamarDocumento(req: Request, res: Response) {
        res.send("Hola");
    }
}
const controllerTest = new ControllerTest();
export default controllerTest
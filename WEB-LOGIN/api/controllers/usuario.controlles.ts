import { Request, Response } from "express";
class ControllerTestUsuario {

    public llamarDocumentoUsuario(req: Request, res: Response) {
        const { nombre } = req.body;
        res.send(`¡Hola, ${nombre}! Bienvenido a la app Node.js 🚀`);
    }

    public llamarDocumentoUsuario2(req: Request, res: Response) {
        const { nombre } = req.params;
        res.send(`¡Hola, ${nombre}! Bienvenido a la app Node.js 🚀`);
    }

    public llamarDocumentoUsuario3(req: Request, res: Response) {
        const { id } = req.params;
        const { nombre } = req.body;
        console.log("I", id, nombre);
        if (id === "0") {
            res.send(`${id}`);
        } else {
            res.send(`¡Hola, ${nombre}, ${id}! Bienvenido a la app Node.js 🚀`);
        }
    }

    public llamarDocumentoUsuario4(req: Request, res: Response) {


        interface Usuario { id: number; nombre: string; }

        let usuarios: Usuario[] = [
            { id: 1, nombre: "alan" },
            { id: 2, nombre: "jair" }
        ];
        const { id } = req.params;

        if (id > "0") {
            const usuarioeliminar = usuarios.findIndex(u => u.id === parseInt(id));

            const eliminado = usuarios.splice(usuarioeliminar, 1);

            res.send(`Eliminado 🚀`);
            console.log(eliminado);
        }

        else { res.send(`No existe`); console.log("No existe"); }

    }

}

const controllerTestUsuario = new ControllerTestUsuario();
export default controllerTestUsuario
import { Request, response, Response } from "express";
import dataBaseService from "../services/data-base.service";
import { Utils } from "../utils";

const utils = new Utils()

class ControllerAnimal {

  public async showAnimals(req: Request, res: Response) {
    const description = "animals[show]";
    try {
      const rows: any = await dataBaseService.pool?.query(`
              SELECT id_animal, name, race, size, color, yearNacido, year, create_at FROM tbl_animals `);
      res.json(utils.response(description, rows, false));
    } catch (err) {
      console.error("Error");
      res.status(500).json(utils.response(description, err, true));
    }
  }


  public async AddAnimals(req: Request, res: Response) {
    const desciption = "animals[create]"
    const { name, race, size, color, yearNacido, year } = req.body;

    dataBaseService.pool?.query("CALL stp_A_animal(?,?,?,?,?,?)", [name, race, size, color, yearNacido, year]).then((Anims) => {

      const idAnimls = Anims[0][0].id
      console.log(idAnimls)
      res.json(utils.response(desciption, idAnimls, false))

    }).catch((err) => { })
  }

  public async deleteAnimals(req: Request, res: Response) {
    const description = "animal[delete]";
    const { id } = req.params;

    try {
      dataBaseService.pool?.query(
        "DELETE FROM tbl_animals WHERE id_animal = ?", [id]

      );
      console.log("COOORERERER");
      res.json(utils.response(description, id, false));
    } catch (err) {
      console.error("Error", err);

    }
  }

  public async updateAnimals(req: Request, res: Response) {
    const { id } = req.params;
    const { name, race, size, color, yearNacido, year } = req.body;
    try {
      const result: any = await dataBaseService.pool?.query(
        `UPDATE tbl_animals 
       SET name = ?, race = ?, size = ?, color = ?, yearNacido = ?,  \`year\` = ?, create_at = NOW() 
       WHERE id_animal = ?`,
        [name, race, size, color, yearNacido, year, id]             //PORQUE YEAR '' 
      );
      console.log("Actualizado ", id)
    } catch (error) {
      console.log("Id no encontrado")
    }
  }


}

const Controlleranimal = new ControllerAnimal();
export default Controlleranimal



import { Request, response, Response } from "express";
import dataBaseService from "../services/data-base.service";
import { Utils } from "../utils";
const utils = new Utils()
class UserController {
  public async singIn(req: Request, res: Response) {

    const descriptionIn = "user[signIn]";
    console.log(req.body)
    const { email, password } = req.body;

    console.log("\nuser ", email, password)

    dataBaseService.pool?.query("CALL stp_sing_in(?,?)", [email, password]).then((user) => {

      res.json(utils.response(descriptionIn, user[0], false))

    }).catch((err) => {
      res.status(403).json(utils.response(descriptionIn, err, true))

    })

  }

}

const userController = new UserController();
export default userController



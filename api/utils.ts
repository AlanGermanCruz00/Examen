import dictionaryUtils from "./dictionary.utils";
import { ResponseModel } from "./models/response.model";

export class Utils {

  constructor() { }
  response(description: any, response: any, error: boolean) {
    const responseModel = new ResponseModel();
    responseModel.date = new Date().toDateString();
    responseModel.description = description
    responseModel.response = response
    if (error === true) {
      responseModel.message = 'error'
      console.log(responseModel)
    }
    return responseModel;
  }
 }
import { MissingParamError } from '../errors/missing-param-error'
import { HttpRequest } from './../protocols/http'
export class SignUpController {
  handle(httpRequest: HttpRequest) {
    if (!httpRequest.body.name) {
      return {
        statusCode: 401,
        body: new MissingParamError('name'),
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 401,
        body: new MissingParamError('email'),
      }
    }
  }
}
